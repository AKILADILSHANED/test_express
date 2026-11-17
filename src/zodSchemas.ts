import * as z from 'zod'

export const schema =  z.coerce.number().max(4, 'Id should max of 3 numbers')
    
    //fname: z.string(),
    //lname: z.string(),
    //age: z.number().max(2, 'Max number should 2').min(2, 'Min number should 2')

