

<div align="center">
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/07bffa6a-2ef9-466d-8065-cb4674d4e1c9" />
<br>
<br>
<h1>Solana Wallets Quickstart (Dynamic)</h1>

<div align="center">
<a href="https://solana-wallets-dynamic.demos-crossmint.com/">Live Demo</a> | <a href="https://docs.crossmint.com/introduction/platform/wallets">Docs</a> | <a href="https://github.com/crossmint">See all quickstarts</a>
</div>

<br>
<br>
<img src="https://github.com/user-attachments/assets/95858bef-d946-4fb5-a08e-5603c66cc0b4" alt="Image" width="full">
</div>

## Introduction
This quickstart shows you how to create and manage Crossmint wallets on Solana, using Dynamic to handle user authentication.

**Learn how to:**
- Create a wallet
- View its balance for SOL and SPL tokens
- Send a transaction
- Add delegated signers to allow third parties to sign transactions on behalf of your wallet

## Deploy
Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCrossmint%2Fsolana-wallets-dynamic-quickstart&env=NEXT_PUBLIC_CROSSMINT_API_KEY&env=NEXT_PUBLIC_DYNAMIC_ENV_ID)

## Setup
1. Clone the repository and navigate to the project folder:
```bash
git clone https://github.com/crossmint/solana-wallets-dynamic-quickstart.git && cd solana-wallets-dynamic-quickstart
```

2. Install all dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up the environment variables:
```bash
cp .env.template .env
```

4. Get a Crossmint API key from [here](https://docs.crossmint.com/introduction/platform/api-keys/client-side) and add it to the `.env` file.
```bash
NEXT_PUBLIC_CROSSMINT_API_KEY=your_api_key
```

5. Get a Dynamic Environment ID from [here](https://app.dynamic.xyz/dashboard) and add it to the `.env` file.
```bash
NEXT_PUBLIC_DYNAMIC_ENV_ID=your_env_id
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Using in production
1. Create a [production API key](https://docs.crossmint.com/introduction/platform/api-keys/client-side).
2. Create a [production Dynamic Environment ID](https://app.dynamic.xyz/dashboard) and add it to the `.env` file.
3. Update the `NEXT_PUBLIC_RPC_URL` to a mainnet RPC URL, you can use the public RPC URL `https://api.mainnet-beta.solana.com`.
4. Update the `NEXT_PUBLIC_USDC_TOKEN_MINT` to the mainnet USDC token mint address `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`.
