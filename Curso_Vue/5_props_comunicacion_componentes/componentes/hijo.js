Vue.component("hijo", {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo: {{numero}}</h4>
    </div>
    `,
    // Recibo a traves de prop una variable de un componente padre
    props: ["numero"]
})