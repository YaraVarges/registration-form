function addProduct() {

    var productContent = {
        productCode: document.getElementById("productCode").value,
        productName: document.getElementById("productName").value,
        creationDate: document.getElementById("creationDate").value,
        //status: document.getElementById("status").value,
        //fileInput: document.getElementById("fileInput").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
        tax: document.getElementById("tax").value,
        discount: document.getElementById("discount").value,
        vendor: document.getElementById("vendor").value,
        brief: document.getElementById("brief").value
    }

    if (
        productContent.productCode != "" &&
        productContent.productName != "" &&
        productContent.creationDate != "" &&
        productContent.quantity != "" &&
        productContent.price != "" &&
        productContent.tax != "" &&
        productContent.discount != "" &&
        productContent.brief != ""
    ) {
        alert(
            "Você está cadastrando o produto:\n\n" +
            productContent.productCode + "\n" +
            productContent.productName + "\n" +
            productContent.creationDate + "\n" +
            //productContent.status + "\n" +
            //productContent.fileInput + "\n" +
            productContent.quantity + "\n" +
            productContent.price + "\n" +
            productContent.tax + "\n" +
            productContent.discount + "\n" +
            productContent.brief + "\n\n" +
            "Situação: Cadastrado!"
        )
        alert(
            "Esse é o formato JS do Objeto que vc está cadastrando:\n\n" +
            JSON.stringify(productContent)
        )
    } else {
        alert("É preciso preencher os campos para cadastrar um produto!")
    }
}