import { Transfer, Approval, AdminChanged, ProxyUpdated, candidateChanged } from '../generated/LinearFinance/LinearFinance'
import { Transfertx, Approvaltx, Adminchangedtx, ProxyUpdatedtx, candidateChangedtx } from '../generated/schema'
import { LinearFinance } from '../generated/LinearFinance/LinearFinance'


export function handleTransfer(event: Transfer): void {
  let id = event.transaction.hash.toHex()

  // contrat import
  let contract = LinearFinance.bind(event.address)

  // récup infos
  let erc20Symbol = contract.symbol()

  let transfertx = new Transfertx(id)

  //transfertx.erc20Symbol = s.toI32(erc20Symbol)

  //transfertx.erc20Symbol = s.params.from

  transfertx.from = event.params.from
  transfertx.to = event.params.to
  transfertx.value = event.params.value

  transfertx.transaction = event.transaction.hash
  transfertx.blockNumber = event.block.number
  transfertx.blockTimestamp = event.block.timestamp

  transfertx.save()
}

export function handleApproval(event: Approval): void {
  let id = event.transaction.hash.toHex()


  let Approvaltx = new Approvaltx(id)

  Approvaltx.owner = event.params.owner
  Approvaltx.spender = event.params.spender
  Approvaltx.value = event.params.value

  Approvaltx.transaction = event.transaction.hash
  Approvaltx.blockNumber = event.block.number
  Approvaltx.blockTimestamp = event.block.timestamp

  Approvaltx.save()
}

export function handlePauseChanged(event: AdminChanged): void {
   let id = event.transaction.hash.toHex()

   let Adminchanged = new Adminchangedtx(id)

   Adminchanged.oldAdmin = event.params.oldAdmin
   Adminchanged.newAdmin = event.params.newAdmin

   Adminchanged.numberBlock = event.block.number
   Adminchanged.author = event.block.author

   Adminchanged.transaction = event.transaction.hash
   Adminchanged.blockNumber = event.block.number
   Adminchanged.blockTimestamp = event.block.timestamp

   Adminchanged.save()
}

export function handleProxyUpdated(event: ProxyUpdated): void {
   let id = event.transaction.hash.toHex()

   let ProxyUpdated = new ProxyUpdatedtx(id)

   ProxyUpdated.proxyupdate = event.params.proxyAddress

   ProxyUpdated.numberBlock = event.block.number
   ProxyUpdated.author = event.block.author

   ProxyUpdated.transaction = event.transaction.hash
   ProxyUpdated.blockNumber = event.block.number
   ProxyUpdated.blockTimestamp = event.block.timestamp

   ProxyUpdated.save()
 }

 export function handlecandidateChanged(event: candidateChanged): void {
    let id = event.transaction.hash.toHex()

    let candidateChanged = new candidateChangedtx(id)

    candidateChanged.oldCandidate = event.params.oldCandidate
    candidateChanged.newCandidate = event.params.newCandidate

    candidateChanged.numberBlock = event.block.number
    candidateChanged.author = event.block.author

    candidateChanged.transaction = event.transaction.hash
    candidateChanged.blockNumber = event.block.number
    candidateChanged.blockTimestamp = event.block.timestamp

    candidateChanged.save()
  }
