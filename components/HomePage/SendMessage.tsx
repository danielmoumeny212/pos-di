"use client"

import {useState} from 'react'

import {z} from "zod"
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {Input} from '../ui/input'
import {Textarea} from '../ui/textarea'
import {Label} from '../ui/label'
import { Button } from '../ui/button'

const messageSchema = z.object({
  email: z.string().email("Invalide email"),
  message: z.string().min(4, {message: "Au moins 10 charactères"})
});

type MessageType = z.infer<typeof messageSchema>

const SendMessage = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver<MessageType>(messageSchema),
  });

  const onSubmit = (data: FieldValues) =>{
    console.log(data)
  }


  return (
    <div>
        <h2 className="text-4xl font-bold mb-4">Questions Fréquemment Posées</h2>
        <p className="mb-8">
            Vous avez une autre question? {" "} 
            <span className="underline cursor-pointer text-primary" onClick={()=>(setFormIsVisible(true))}>Ecrivez nous</span>        
        </p>

        {formIsVisible && <div className="max-w-[300px] mb-10">
          <form onSubmit={handleSubmit(onSubmit)}>      
            <div>
              <Label className="text-muted-foreground mb-2 ml-2">Email</Label>
              <Input 
                type="email" 
                placeholder="Entrez votre email"
                {...register('email')}
                className="focus-visible:ring-0 mt-[3px]"
              />
              {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
            </div>            
            <div className="my-6">
              <Label className="text-muted-foreground ml-2">Message</Label>
              <Textarea 
                placeholder="Entrez votre message"
                {...register('message')}
                className="focus-visible:ring-0 mt-[3px] h-[80px] resize-none"
              />
              {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
            </div>
            <Button type="submit" className="w-32 text-md">Envoyer</Button>            
          </form>
        </div>}
    </div>
  )
}

export default SendMessage