let obj = [
    {Produto:"Vaso", preço: 10.90},
    {Produto:"Escova", preço: 20.00},
    {Produto:"Prato", preço: 5.90},
    {Produto:"Copo", preço: 6.90}
];

obj.forEach(Obj => {
    console.log(Obj.Produto +": R$"+ Obj.preço)
});