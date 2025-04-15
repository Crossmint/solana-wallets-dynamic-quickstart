"use client";

import { useEffect } from "react";
import {
  useCrossmint,
  useWallet as useCrossmintWallet,
} from "@crossmint/client-sdk-react-ui";
import {
  getAuthToken,
  useDynamicContext,
  useIsLoggedIn,
} from "@dynamic-labs/sdk-react-core";
import { isSolanaWallet } from "@dynamic-labs/solana";

export const useDynamicConnector = () => {
  const { crossmint, setJwt } = useCrossmint();
  const {
    getOrCreateWallet: getOrCreateCrossmintWallet,
    status: crossmintWalletStatus,
    error: crossmintWalletError,
    wallet: crossmintWallet,
  } = useCrossmintWallet();

  const { primaryWallet: dynamicPrimaryWallet, sdkHasLoaded } =
    useDynamicContext();
  const isAuthenticated = useIsLoggedIn();
  const jwt = getAuthToken();

  useEffect(() => {
    setJwt(jwt);
  }, [jwt]);

  useEffect(() => {
    const fetchCrossmintWallet = async () => {
      if (
        !crossmint.jwt ||
        !isAuthenticated ||
        !dynamicPrimaryWallet ||
        !isSolanaWallet(dynamicPrimaryWallet)
      ) {
        return null;
      }

      try {
        const dynamicSigner = await dynamicPrimaryWallet.getSigner();
        await getOrCreateCrossmintWallet({
          type: "solana-smart-wallet",
          args: {
            adminSigner: {
              address: dynamicPrimaryWallet.address,
              signer: {
                signMessage: async (message: Uint8Array) => {
                  const signedMessage = await dynamicSigner.signMessage(
                    message
                  );
                  return new Uint8Array(signedMessage.signature);
                },
                signTransaction: dynamicSigner.signTransaction,
              },
              type: "solana-keypair",
            },
          },
        });
      } catch (error) {
        console.error("Failed to create Crossmint wallet:", error);
      }
    };

    fetchCrossmintWallet();
  }, [jwt, isAuthenticated, dynamicPrimaryWallet, crossmint.jwt]);

  return {
    dynamicPrimaryWallet,
    crossmintWallet,
    crossmintWalletStatus,
    crossmintWalletError,
    isLoading: crossmintWalletStatus === "in-progress" || !sdkHasLoaded,
  };
};
