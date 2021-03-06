## **Performance**

### **Fluxo de renderização de um componente**

1. Criar uma nova versão do componente - Acontece sempre que um componente pai é atualizado, os componentes filhso sempre terão uma versão deles atualizada
2. Comparar com a versão anterior
3. Se houverem alterações, vai atualizar o que alterou.

---

### **Memo**

É uma função do react que consegue evitar que a primeira instrução do _fluxo de renderização_ aconteça caso nenhuma props do componente tenha sido alterada.

> Por padrão, o **memo** faz uma verificação que chamamos de **shallow compare** (comparação rasa). Ele verifica basicamente, a igualdade das informações que temos dentro das propriedades. Mas como o JS faz a comparação em **igualdade referencial**, ele sempre vai retornar as props como `false` (`{} === {}`). Então por isso precisamos utilizar o segundo parâmetro do memo.

---

### **useMemo**

Evita que alguma coisa que ocupe muito processamento (ex: cálculo), seja refeito toda vez que o componente renderizar.

> Serve também para evitarmos que uma variável ocupe um novo local na memória quando utilizamos essa variável para ser passada para um componente filho

**Uso:**

1.  Cálculos pesados. Não use para cálculos pequenos, porque o **useMemo** já tem um custo de processamento e pode ser que fique mais lento do que não colocando ele.
2.  Igualdade referencial, quando passamos a informação para um componente filho. Então por mais que o cálculo seja simples, se for usar a informação para componente filho, vale a pena utilizar o **useMemo**

---

### **useCallback**

Memorizar uma função.

**Uso:**

1.  Igualdade referencial, quando passamos a informação para um componente filho.

---

### **Formatação de dados**

Faça a formatação no momento que busca as informações e não no momento que irá exibi-las (no momento que irá renderizar o componente que vai precisar da informação)

---

### **Dynamic import (Code Splitting) / Lazy Load**

Importar alguma coisa somente no momento que for utilizar.
Quando vamos carregar um componente e ele nem sempre está visível em tela (só é visível a partir de uma ação do usuário), podemos colocar o componente em Lazy Load (carregamento preguiçoso).

> **Doc:** https://reactjs.org/docs/code-splitting.html

---

### **Virtualização**

Permite que mostre em tela somente os itens que estão visíveis no navegador do usuário.

> Instale a biblioteca `react-virtualized` (`yarn add react-virtualized -D`)
