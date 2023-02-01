import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowCircleUp,ArrowCircleDown } from 'phosphor-react'
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';

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
                    <TransactionTypeContainer>
                        <TransactionTypeButton value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionTypeContainer>
                    <button type="submit">Cadastar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}