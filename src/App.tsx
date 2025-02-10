import { Box, Button, Container, Stack, Typography } from '@mui/material';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from './utils/formShema';
import { CustomField } from './components/CustomField';

function App() {
  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      age: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    alert(`Данные отправлены: ${JSON.stringify(data, null, 2)}`);

    reset();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          px: 3,
          py: 2,
          maxWidth: 420,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          border: (theme) => `1px solid ${theme.palette.grey[400]}`,
          boxShadow: (theme) => theme.shadows[2],
        }}
        noValidate
      >
        <Typography variant="h5" textAlign={'center'} mb={2}>
          Form
        </Typography>

        <Stack spacing={2}>
          <CustomField control={control} name="name" />
          <CustomField control={control} name="email" />
          <CustomField control={control} name="age" />
        </Stack>

        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 3, alignSelf: 'flex-end' }}
        >
          Проверить данные
        </Button>
      </Box>
    </Container>
  );
}

export default App;
