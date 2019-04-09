# Tutorial: Forks e Branches
1. Ao acessar o repositório desejado, clique no botão **Fork**, no canto superior direito da tela:

![](https://raw.githubusercontent.com/martucci-melillo/imagens_readmes/master/readme_tutorial_fork/click_fork.png)

2. Selecione para qual repositório deseja realizar o **Fork**:

![](https://raw.githubusercontent.com/martucci-melillo/imagens_readmes/master/readme_tutorial_fork/selec_repositorio.png)

3. Ao finalizar o **Fork**, você já estará na tela do repositório "forkado" para o seu profile. Clone-o para sua máquina no local desejado.

4. Crie um novo **branch** para realizar as alterações em seu projeto. Para isso, acesse o repositório do projeto através do terminal e digite o seguinte comando:

```
git checkout -b nome_do_branch
```



- Se tudo der certo, aparecerá a seguinte mensagem no terminal:

```
Switched to a new branch 'nome_do_branch'
```

6. Após realizar as alterações no projeto, basta executar os comandos:

```
git add *
```
```
git commit -m "comentários das alterações"
```
```
git push origin nome_do_branch
```
7. Em seguida, retorne ao **GitHub**, acesse o repositório desejado, clique no botão **Branch: master** (vide imagem acima) e selecione o branch criado.

8. Ao lado do botão **Branch: master**, clique no botão **New pull request**. Você será redirecionado para a tela abaixo, clique em **Create pull request**:

![](https://raw.githubusercontent.com/martucci-melillo/imagens_readmes/master/readme_tutorial_fork/create_pull.png)

9. Nessa tela, você pode deixar comentários informando sobre as alterações realizadas. Em seguida, clique em **Create pull request**:

![](https://raw.githubusercontent.com/martucci-melillo/imagens_readmes/master/readme_tutorial_fork/create_pull2.png)

10. Feito isso, você:
- Criou **Fork** do repositório em seu profile;
- Criou um novo **Branch** para organizar seus projetos;
- Finalizou a tarefa realizando **commit, push** e iniciando um **pull request** no projeto original.
