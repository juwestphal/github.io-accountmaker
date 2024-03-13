        document.getElementById('accountForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const nif = document.getElementById('nif').value;
            const observations = document.getElementById('observations').value;

            if (!name || !email || !phone || !address || !nif) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            if (nif.length !== 9) {
                alert('O NIF deve conter 9 dígitos.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            // Limpa os campos do formulário
            document.getElementById('accountForm').reset();

            // Exibe mensagem de sucesso na consola
            console.log('Conta registada com sucesso:');
            console.log('Nome:', name);
            console.log('E-mail:', email);
            console.log('Número de Telefone:', phone);
            console.log('Morada:', address);
            console.log('NIF:', nif);
            console.log('Observações:', observations);
        });

        // Função para validar o email
        function validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
