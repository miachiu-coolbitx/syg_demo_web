(this["webpackJsonpsygna-brige"]=this["webpackJsonpsygna-brige"]||[]).push([[0],{70:function(e,a,t){e.exports=t(91)},75:function(e,a,t){},76:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l);t(75);var o=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"index.html"},r.a.createElement("img",{src:"https://6tzs95ygc93ndarqhl8fkg-on.drv.tw/SYGNABridge_mail/images/logo.png",alt:"SYGNA Bridge"})))))},c=t(36),s=t(37),d=t(44),m=t(42),u=(t(45),t(22),t(60),t(128)),p=(t(57),t(130)),h=t(127),g=t(126),y=(t(129),t(90),t(76),t(15));Object(u.a)({root:{display:"inline-block",width:"50%",backgroundColor:"#e9eee9",".test":{backgroundColor:"#0404"}},test:{color:"#222b45"}}),Object(u.a)({root:{},props:{MuiInputBase:{color:"#6600cc",required:!0}}}),Object(u.a)({root:{fontSize:"15px",color:"#222b45",fontWeight:"600",paddingTop:"14px",paddingBottom:"14px",border:"1px solid #c5cee0",backgroundColor:"#f7f9fc",boxSizing:"border-box"}}),Object(u.a)((function(e){return{root:{button:{fontSize:"40px",backgroundColor:"#6600cc"}}}}));function E(){return r.a.createElement("div",{className:"info"},r.a.createElement("h6",null,"Key pair generation"),r.a.createElement("p",null,"This short guide will help you to generate a key pair via the OpenSSL command line tool, in order to provide the public key to Bridge.",r.a.createElement("br",null),r.a.createElement("br",null),"Generate an EC private key, of size 256, and output it to a file named key.pem: >> $ openssl ecparam -name secp256k1 -genkey -out key.pem",r.a.createElement("br",null),r.a.createElement("br",null),"Extract the public key from the key pair, which can be used in the encryption: >> $ openssl ec -in key.pem -pubout -out public.pem",r.a.createElement("br",null),r.a.createElement("br",null),"After running these two commands you will generate two files: key.pem and public.pem in your working directory. Please provide us with the public.pem key.pem is referenced in the creation of a digital signature on the message. Please take care not to expose the private key. Ensure that you only do so on a system you consider to be secure."))}function v(){return r.a.createElement("div",{className:"cta_block"},r.a.createElement("p",{className:"text"},"If you have any questions with the information in this email, please let us know at ",r.a.createElement("a",{href:"mailto:contact@sygna.io"},"contact@sygna.io")," or visit our website at ",r.a.createElement("a",{href:"sygna.io",target:"_blank"},"sygna.io")),r.a.createElement("div",{className:"cta"},r.a.createElement("input",{type:"submit",name:"",value:"Submit",className:"btn btn-primary"})))}var b=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{email:"",companyname:"",vaspcode:"",countrycode:"",vaspapi:""},submitted:!1},e.handleChange=function(a){var t=e.state.formData;t[a.target.name]=a.target.value,e.setState({formData:t})},e.handleSubmit=function(){e.setState({submitted:!0},(function(){setTimeout((function(){return e.setState({submitted:!1})}),5e3)}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.formData;e.submitted;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"intro"},r.a.createElement("h2",{className:"title"},"Welcome to Sygna Bridge VASP Registration")),r.a.createElement(y.ValidatorForm,{id:"registration_form",ref:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field required"},r.a.createElement("h5",null,"Email Address"),r.a.createElement(h.a,null,"Your valid email address."),r.a.createElement(y.TextValidator,{id:"Email",placeholder:"Input mail address",InputLabelProps:{shrink:!0},type:"mail",onChange:this.handleChange,name:"email",value:a.email,validators:["required","isEmail"],errorMessages:["This field is required","Email is not valid"]})),r.a.createElement("div",{className:"input-field required"},r.a.createElement("h5",null,"Company Name"),r.a.createElement(h.a,null,'Your registered company name. Example: "VASP LTD."'),r.a.createElement(y.TextValidator,{id:"CompanyName",placeholder:"Your company name",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"companyname",value:a.companyname,validators:["required","isString"],errorMessages:["This field is required","Company name is not valid"]})),r.a.createElement("div",{className:"input-field required"},r.a.createElement("h5",null,"VASP Code Name"),r.a.createElement(h.a,null,'4 uppercase letters to represent your company name. Example: "Coinbase exchange" could be "CBSE", "Sygna" could be "SYGN"'),r.a.createElement(y.TextValidator,{id:"VASPCodeName",placeholder:"Input VASP code Name",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"vaspcode",value:a.vaspcode,validators:["required","isString"],errorMessages:["This field is required","VASP code name is not valid"]})),r.a.createElement("div",{className:"input-field required"},r.a.createElement("h5",null,"Country Code"),r.a.createElement(g.a,{variant:"outlined"},r.a.createElement(h.a,null,"Country location of your company jurisdiction. Please follow ISO 3166-1 alpha-2 country code."),r.a.createElement(y.TextValidator,{select:!0,id:"CountryCode",value:a.countrycode.value,onChange:this.handleChange,inputProps:{"aria-label":"Without label"},className:"selectStyle",placeholder:a.countrycode.test},r.a.createElement(p.a,{test:!0},"Select"),r.a.createElement(p.a,{value:1},"Virtual/Flat"),r.a.createElement(p.a,{value:2},"Virtual/Virtual"),r.a.createElement(p.a,{value:3},"Transfer"),r.a.createElement(p.a,{value:4},"Custodian"),r.a.createElement(p.a,{value:5},"Other")))),r.a.createElement("div",{className:"input-field required"},r.a.createElement("h5",null,"City Code"),r.a.createElement(h.a,null,'2 letters city abbreviation. Example: "NY"'),r.a.createElement(y.TextValidator,{id:"CityCode",placeholder:"Input city code",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"citycode",value:a.citypcode,validators:["required","isString","minStringLength: 2","maxStringLength: 2"],errorMessages:["This field is required","City code is not valid"]})),r.a.createElement("div",{className:"input-field"},r.a.createElement("h5",null,"Company ID"),r.a.createElement(h.a,null,"Company registration code under local jurisdiction."),r.a.createElement(y.TextValidator,{id:"CompanyID",placeholder:"Input company ID",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"company_id",value:a.companyid})),r.a.createElement("div",{className:"input-field required"},r.a.createElement("h5",null,"Beneficiary VASP API endpoint URL"),r.a.createElement(h.a,null,"API endpoint for beneficiary VASP to receive API request from Bridge Server (",r.a.createElement("a",{href:"http://bit.ly/2NhZUlS",target:"_blank"},"http://bit.ly/2NhZUlS"),'). Example: "',r.a.createElement("a",{href:"#",target:"_blank"},"beneficiary.example/api/v1/bridge/transaction/permission-request")),r.a.createElement(y.TextValidator,{id:"VASPapi",placeholder:"Input beneficiary VASP API endpoint URL",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"vaspapi",value:a.vaspapi})),r.a.createElement("div",{className:"input-field"},r.a.createElement("h5",null,"Fixed static IP Address"),r.a.createElement(h.a,null,"To create a secure communication tunnel between Bridge and VASP servers, Bridge can register VASP server static IP for identification. (optional)"),r.a.createElement(y.TextValidator,{id:"VIPAddress",placeholder:"Input fixed static IP address",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"vip_address",value:a.vip_address})),r.a.createElement("div",{className:"input-field"},r.a.createElement("h5",null,"Go-Live Date"),r.a.createElement(h.a,null,"Default date: three days after the registration is done."),r.a.createElement(y.TextValidator,{id:"go_live_date",placeholder:"YY/MM/DD 00:00",InputLabelProps:{shrink:!0},type:"text",onChange:this.handleChange,name:"go_live_date"})),r.a.createElement(E,null),r.a.createElement(v,null)))}}]),t}(r.a.Component);r.a.Component,t(89);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null),r.a.createElement(b,null)),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.508ac66f.chunk.js.map