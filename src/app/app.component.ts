import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zappfresh';

  citys = ['gurgaon','delhi','ghaziabad','chandigarh','mohali','panchkula'];
  dishes = [{'name':'Catla Fish - Cut', 'amount':'129'}];
  addflag = false;
  paymentflag = false;
  wallet = false;
  qty = 1;
  amount = 129;
  totalamout = 179;
  zappcerdit = 50;
  colora = 'btn-outline-danger';
  colorb = 'btn-outline-dark';
  colorc = 'btn-outline-dark';

  work = true;
  home = false;
  addnew = false;
  hiddeaddress(){
    this.addflag = !this.addflag
  }
  hidepayment(){
    this.paymentflag = !this.paymentflag
  }
  wallets(){
    this.wallet = true
  }
  notwallets(){
    this.wallet =false
  }
  addqty(){
    this.qty = this.qty + 1;
    this.amount = 129 * this.qty;
    this.totalamout = this.amount + 50;
  }
  lessqty(){
    if(this.qty>1){
      this.qty = this.qty - 1;
      this.amount = 129 * this.qty;
      this.totalamout = this.amount + 50;
    }
  }
  ZappCredit(){
    this.totalamout = this.totalamout - this.zappcerdit;
    this.zappcerdit = 0;
  }
  isselected(str:string){
    
    if(str == "work"){
      this.work = true;
      this.home = false;
      this.addnew = false;
      // console.log("work clicked")
      this.colora = 'btn-outline-danger';
      this.colorb = 'btn-outline-dark';
      this.colorc = 'btn-outline-dark';
    }
    else if(str == "home"){
      this.work = false;
      this.home = true;
      this.addnew = false;
      // console.log("home clicked")
      this.colorb = 'btn-outline-danger';
      this.colora = 'btn-outline-dark';
      this.colorc = 'btn-outline-dark';
    }
    else if(str == "addnew"){
      this.work = false;
      this.home = false;
      this.addnew = true;
      console.log("addnew clicked")
      this.colorc = 'btn-outline-danger';
      this.colorb = 'btn-outline-dark';
      this.colora = 'btn-outline-dark';
    }
  }
  apply = false;
  applycoupon(){
    this.apply = !this.apply
  }
  search = false;
  searchbar(){
    this.search = !this.search
  }
  city = 'gurgaon';
  getcity(str: string){
    this.city = str
    console.log(str)
  }
  liked = false;
  likethis(){
    this.liked = true;
    this.dishes.push({'name':'Chicken Achari Tikka (Boneless Thigh)','amount':'198'});
    console.log(this.dishes)
  }
}

