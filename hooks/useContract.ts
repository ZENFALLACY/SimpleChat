// hooks/useContract.ts
"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const useMessageContract = () => {
  const { address } = useAccount()

  const { data: allMessages, refetch: refetchMessages } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getAllMessages",
  })

  const { data: messageCount, refetch: refetchCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getMessageCount",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isConfirmed) {
      refetchMessages()
      refetchCount()
    }
  }, [isConfirmed, refetchMessages, refetchCount])

  const sendMessage = async (msg: string) => {
    if (!msg) return
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "sendMessage",
        args: [msg],
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data: {
      allMessages: allMessages || [],
      messageCount: messageCount ? Number(messageCount as bigint) : 0,
    },
    actions: { sendMessage },
    state: {
      isLoading: isLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
