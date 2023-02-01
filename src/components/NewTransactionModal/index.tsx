import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton>
                    <X />
                </CloseButton>
                <Dialog.Title>Nova transação</Dialog.Title>
                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <button type="submit">Cadastar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}