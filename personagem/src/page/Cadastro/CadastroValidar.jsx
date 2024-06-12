export const CadastroValidar = (values) => {
    let errors = {};

    const email_val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senha_val = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/;

    if (!values.nome) {
        errors.nome = 'Campo obrigatório';
    }

    if (!values.email) {
        errors.email = 'Campo obrigatório';
    } else if (!email_val.test(values.email)) {
        errors.email = 'Email inválido';
    }

    const senha = String(values.senha || '').trim();
    if (!senha) {
        errors.senha = 'Campo obrigatório';
    } else if (!senha_val.test(senha)) {
        errors.senha = 'A senha deve conter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número.';
    }

    return errors;
};

