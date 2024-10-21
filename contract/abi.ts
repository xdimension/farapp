 export const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ticketPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_subscriptionId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_vrfCoordinator",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_keyHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "have",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "want",
        "type": "address"
      }
    ],
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "have",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "coordinator",
        "type": "address"
      }
    ],
    "name": "OnlyOwnerOrCoordinator",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "vrfCoordinator",
        "type": "address"
      }
    ],
    "name": "CoordinatorSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "couponID",
        "type": "uint32"
      }
    ],
    "name": "WinnersChosen",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "buyerCouponIDs",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "buyerTicketNums",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "couponID",
        "type": "uint32"
      }
    ],
    "name": "chooseWinners",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "couponIDs",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "name": "coupons",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "couponID",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "minNumOfTickets",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "maxNumOfTickets",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "numOfWinners",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "availFrom",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "availTo",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isDrawn",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_couponID",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_seller",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "_minNumOfTickets",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_maxNumOfTickets",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "_numOfWinners",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_availFrom",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_availTo",
        "type": "uint256"
      }
    ],
    "name": "createCoupon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_couponID",
        "type": "uint32"
      }
    ],
    "name": "createTicket",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_buyerAddr",
        "type": "address"
      }
    ],
    "name": "getBuyerCoupons",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "couponID",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "minNumOfTickets",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "maxNumOfTickets",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "numOfWinners",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "availFrom",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availTo",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isDrawn",
            "type": "bool"
          }
        ],
        "internalType": "struct FarBuyCoupon.Coupon[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_couponID",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_buyerAddr",
        "type": "address"
      }
    ],
    "name": "getBuyerTickets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "couponID",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "ticketNum",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "timeOfEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "buyerAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isWinner",
            "type": "bool"
          }
        ],
        "internalType": "struct FarBuyCoupon.Ticket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_couponID",
        "type": "uint32"
      }
    ],
    "name": "getCoupon",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "couponID",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "minNumOfTickets",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "maxNumOfTickets",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "numOfWinners",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "availFrom",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availTo",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isDrawn",
            "type": "bool"
          }
        ],
        "internalType": "struct FarBuyCoupon.Coupon",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_couponID",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_ticketNum",
        "type": "uint32"
      }
    ],
    "name": "getTicket",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "couponID",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "ticketNum",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "timeOfEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "buyerAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isWinner",
            "type": "bool"
          }
        ],
        "internalType": "struct FarBuyCoupon.Ticket",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_couponID",
        "type": "uint32"
      }
    ],
    "name": "getTicketsByCouponID",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "couponID",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "ticketNum",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "timeOfEntry",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "buyerAddr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isWinner",
            "type": "bool"
          }
        ],
        "internalType": "struct FarBuyCoupon.Ticket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isChoosingWinners",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "randomWords",
        "type": "uint256[]"
      }
    ],
    "name": "rawFulfillRandomWords",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "s_vrfCoordinator",
    "outputs": [
      {
        "internalType": "contract IVRFCoordinatorV2Plus",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_vrfCoordinator",
        "type": "address"
      }
    ],
    "name": "setCoordinator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_val",
        "type": "uint32"
      }
    ],
    "name": "setVRFCallbackGasLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_val",
        "type": "bool"
      }
    ],
    "name": "setVRFNativePayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ticketNums",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticketPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "name": "tickets",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "couponID",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "ticketNum",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "timeOfEntry",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "buyerAddr",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isWinner",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vrf_callbackGasLimit",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vrf_keyHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vrf_lastRequestId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vrf_nativePayment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;