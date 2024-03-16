export var cusArr = [];

export function addCustomer(id, name, address, mobile) {
  var cus = { id: id, name: name, address: address, mobile: mobile };
  cusArr.push(cus);
}

export function searchCustomer(id) {
  var cus = cusArr.find((e) => e.id == id);
  return cus;
  //   for (var cus of cusArr) {
  //     if (cus.id == id) {
  //       return cus;
  //     }
  //   }
}

export function deleteCustomer(id) {
  for (let i = 0; i < cusArr.length; i++) {
    if (cusArr[i].id == id) {
      cusArr.splice(i, 1);
      return "Customer Deleted Successfully";
    }
  }
  return "Id Not Found";
}

export function modifyCustomer(id, name, address, mobile) {
  var cus = cusArr.find((e) => e.id == id);
  cus.name = name;
  cus.address = address;
  cus.mobile = mobile;
}
