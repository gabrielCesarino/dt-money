import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';
import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { control, register, handleSubmit, formState: { isSubmitting }, reset } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data)
        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton>
                    <X />
                </CloseButton>
                <Dialog.Title>Nova transação</Dialog.Title>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder='Preço'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />
                    <Controller 
                        control={control}
                        name='type'
                        render={({field}) => {
                            return (
                                <TransactionTypeContainer 
                                    onValueChange={field.onChange} 
                                    value={field.value}
                                >
                                    <TransactionTypeButton value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton value='outcome'>
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionTypeContainer>
                            )
                    }} />
                    <button type="submit" disabled={isSubmitting}>Cadastar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}