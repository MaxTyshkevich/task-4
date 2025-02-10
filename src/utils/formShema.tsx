import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Имя должно содержать минимум 2 символа',
  }),
  email: z.string().email({
    message: 'Некорректный email',
  }),

  age: z.preprocess(
    (val) => Number(val),
    z
      .number({ invalid_type_error: 'Возраст должен быть числом' })
      .min(3, 'Возраст должен быть больше 3')
      .max(120, 'Возраст должен быть меньше 120')
  ),
});

export type FormData = z.infer<typeof formSchema>;
