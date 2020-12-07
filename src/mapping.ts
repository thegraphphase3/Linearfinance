import { Transfer, Approval, AdminChanged, ProxyUpdated } from '../generated/LinearFinance/LinearFinance'
import { Transfertx, Approvaltx, Adminchangedtx, ProxyUpdatedtx } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
  let id = event.params.to
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

  let transfertx = new Transfertx(id)

  transfertx.from = event.params.from
  transfertx.to = event.params.to
  transfertx.value = event.params.value

  transfertx.transaction = event.transaction.hash
  transfertx.blockNumber = event.block.number
  transfertx.blockTimestamp = event.block.timestamp

  transfertx.save()
}

export function handleApproval(event: Approval): void {
  let id = event.params.owner
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())

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
