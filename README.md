# SimpleChat — On-Chain Messaging dApp

## **Contract Address**
`0xFAc05469491F5e529AC44166fA6DA4ab3f42e0F3`  
Explorer: https://coston2-explorer.flare.network/address/0xFAc05469491F5e529AC44166fA6DA4ab3f42e0F3

---

## **Project Description**
SimpleChat is a fully on-chain messaging application built on the Flare Coston2 network.  
It allows users to send plain-text messages directly to a deployed smart contract, where they are stored permanently on the blockchain. Anyone connected with a wallet can view and post messages, demonstrating decentralized data storage and smart-contract interaction with a clean frontend.

This project serves as a beginner-friendly decentralized application (dApp) template, showcasing:
- Smart contract interaction using Wagmi + Viem
- Reading on-chain data (messages, count)
- Writing transactions (sending messages)
- Wallet gating
- Realtime UI updates upon transaction confirmation

---

## **Features**
### ✅ **On-Chain Storage**
All messages are stored directly inside the smart contract.

### ✅ **Send Messages**
Users can submit any string message, which is broadcast to the blockchain.

### ✅ **View All Messages**
Anyone can instantly fetch and view all messages stored on-chain.

### ✅ **Message Count**
The UI displays the total number of messages stored.

### ✅ **Transaction Feedback**
Includes full transaction lifecycle handling:
- pending
- confirming
- confirmed
- error handling

### ✅ **Wallet Gating**
The interface automatically detects wallet connection status and restricts access accordingly.

### ✅ **Clean UI + React Hooks**
Built using:
- React
- TailwindCSS
- Wagmi
- Viem

---

## **How It Solves the Problem**
Traditional chat applications store messages on centralized servers, making them vulnerable to:
- Data loss  
- Single-point failures  
- Censorship  
- Unauthorized tampering  

**SimpleChat solves this by decentralizing message storage onto the blockchain**, ensuring:
- Messages cannot be altered or deleted  
- Data is globally accessible  
- No central authority controls the system  
- Full transparency and immutability  

### **Use Cases**
- Demonstrating how dApps interact with smart contracts  
- Teaching blockchain fundamentals to beginners  
- A template for building more complex social dApps  
- Proof-of-concept for immutable data storage  

---

SimpleChat is a minimal but powerful foundation for learning Web3 development using real smart contract integration, UI/UX handling, and blockchain interaction.


