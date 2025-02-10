import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import type { FormData } from '../utils/formShema';
type CustomFieldProps = {
  name: keyof FormData;
  control: Control<FormData>;
};
export const CustomField = (props: CustomFieldProps) => {
  const { control, name } = props;
  const placeholder = name[0].toUpperCase() + name.slice(1);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          {...field}
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message}
          sx={{
            '& .MuiFormHelperText-root': {
              fontSize: '12px',
              lineHeight: '1.2',
              marginTop: '4px', // Минимальный отступ сверху, чтобы не было резкого сдвига
              minHeight: '14px',
            },
          }}
          value={field.value ?? ''}
        />
      )}
    />
  );
};
