import React, {Component} from 'react';
import Axios from "axios";
import ReactToPrint from 'react-to-print';
import logo from "./logo.png";

class PrintPage extends Component {
  state = {
    formId:"",
    typeOfAssistanceNeeded:"",
    claimMadeBy: "",
    familyId:"",
    dateOfCaseStudy:"",
    governorate:"",
    state:"",
    town:"",
    neighborhood:"",
    sourceOfCase:"",
    dateOfLetter:"",
    phone:"",
    orphan:false,
    other:"",
    isOther:false,
    financialIssues:false,
    socialSecurity:false,
    limitedIncome:false,
    husbandName:"",
    husbandNationality:"",
    husbandCivilId:"",
    husbandPhone:"",
    husbandIsWorking:false,
    husbandIsRetired:false,
    husbandIsUnemployed:false,
    husbandIsIncarcerated:false,
    husbandIsDisabled:false,
    husbandIsSick:false,
    husbandIsDeceased:false,
    OtherHusbandStatus:"",
    husbandWorksAt:"",
    husbandJob:"",
    husbandSalary:"",
    husbandIsRetiredFrom:"",
    husbandIsRetirementSalary:"",
    husbandNumberOfWives:"",
    wifeName:"",
    wifeNationality:"",
    wifeCivilId:"",
    wifePhone:"",
    isHouseWife:false,
    wifeIsRetired:false,
    wifeIsWidow:false,
    wifeIsAbandoned:false,
    wifeIsDisabled:false,
    wifeIsSick:false,
    wifeIsDeceased:false,
    wifeIsDivorced:false,
    wifeJob:"",
    wifeWorksAt:"",
    wifeSalary:"",
    wifeIsRetiredFrom:"",
    wifeIsRetirementSalary:"",
    dateOfDivorce:"",
    wifeBankNumber:"",
    isProductiveFamily:false,
    typeOfProductiveFamily:"",
    guardianName:"",
    guardianCivilId:"",
    guardianRelation:"",
    guardianPhone:"",
    relativeName:"",
    relativePhone:"",
    relativeRelation:"",
    numberOfResidenceInHouseHold:"",
    maleUnemployedAdultChildren:"",
    femaleUnemployedAdultChildren:"",
    numberOfChildrenInElementary:"",
    numberOfChildrenInSecondary:"",
    numberOfChildrenInHighSchool:"",
    numberOfChildrenInHigherEducation:"",
    salary:"",
    retirementSalary:"",
    socialSecuritySalary:"",
    alrahmaSalary:"",
    darAlataaSalary:"",
    nafaqaSalary:"",
    bahwanSalary:"",
    otherSalary:"",
    oneStoryHouse:false,
    twoStoryHouse:false,
    apartment:false,
    addition:false,
    otherAccommodation:false,
    owned:false,
    inherited:false,
    combined:false,
    rent:false,
    rentAmount:"",
    lateRentAmount:"",
    lateElectricalAmount:"",
    lateWaterAmount:"",
    numberOfRooms:"",
    numberOfLivingRooms:"",
    numberOfSittingRooms:"",
    numberOfKitchens:"",
    numberOfBathrooms:"",
    privateVehicles:"",
    rentalVehicles:"",
    schoolBus:"",
    gasTruck:"",
    waterTruck:"",
    otherPossessions:"",
    housingLoaner:"",
    housingLoanAmount:"",
    housingLoanMonthlyPayments:"",
    housingLoanAmountDue:"",
    personalLoaner:"",
    personalLoanAmount:"",
    personalLoanMonthlyPayments:"",
    personalLoanAmountDue:"",
    vehicleLoaner:"",
    vehicleLoanAmount:"",
    vehicleLoanMonthlyPayments:"",
    vehicleLoanAmountDue:"",
    updatedBy:"",
    dateOfUpdate:"",
    report:"",
    suggestions:"",
    fieldAgentName:"",
    fieldAgentPhone:"",
    dateOfReport:"",
    panelRecFirst:"",
    panelRecSecond:"",
    panelRecThird:"",
    panelRecFourth:"",
    panelRecFifth:"",
    panelRecSixth:"",
    isArchived: false
  }

  handleChange = (e) => {
    this.setState({formId: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state.formId);
    await Axios.get(`https://dashboard.alrahma-baraka.com:5001/family/print/${this.state.formId}`, {headers:{Authorization: "Bearer" + localStorage.getItem("jwtToken")}})
    // .then(res => console.log(res.data))
      .then(res => this.setState({
        typeOfAssistanceNeeded: res.data.data[0].typeOfAssistanceNeeded,
        claimMadeBy: res.data.data[0].claimMadeBy,
        familyId: res.data.data[0].familyId,
        dateOfCaseStudy: res.data.data[0].dateOfCaseStudy,
        governorate: res.data.data[0].familyAddress[0].governorate,
        state: res.data.data[0].familyAddress[0].state,
        town: res.data.data[0].familyAddress[0].town,
        neighborhood: res.data.data[0].familyAddress[0].neighborhood,
        sourceOfCase: res.data.data[0].sourceOfCase,
        dateOfLetter: res.data.data[0].dateOfLetter,
        phone: res.data.data[0].phone,
        isOther: res.data.data[0].familyCategory[0].isOther,
        limitedIncome: res.data.data[0].familyCategory[0].limitedIncome,
        socialSecurity: res.data.data[0].familyCategory[0].socialSecurity,
        financialIssues: res.data.data[0].familyCategory[0].financialIssues,
        orphan: res.data.data[0].familyCategory[0].orphan,
        other: res.data.data[0].familyCategory[0].other,
        husbandName: res.data.data[0].husband[0].husbandName,
        husbandNationality: res.data.data[0].husband[0].husbandNationality,
        husbandCivilId: res.data.data[0].husband[0].husbandCivilId,
        husbandPhone: res.data.data[0].husband[0].husbandPhone,
        husbandIsDeceased: res.data.data[0].husband[0].husbandIsDeceased,
        husbandIsDisabled: res.data.data[0].husband[0].husbandIsDisabled,
        husbandIsIncarcerated: res.data.data[0].husband[0].husbandIsIncarcerated,
        husbandIsRetired: res.data.data[0].husband[0].husbandIsRetired,
        husbandIsSick: res.data.data[0].husband[0].husbandIsSick,
        husbandIsUnemployed: res.data.data[0].husband[0].husbandIsUnemployed,
        husbandIsWorking: res.data.data[0].husband[0].husbandIsWorking,
        OtherHusbandStatus: res.data.data[0].husband[0].OtherHusbandStatus,
        husbandWorksAt: res.data.data[0].husband[0].husbandWorksAt,
        husbandJob: res.data.data[0].husband[0].husbandJob,
        husbandSalary: res.data.data[0].husband[0].husbandSalary,
        husbandIsRetiredFrom:res.data.data[0].husband[0].husbandIsRetiredFrom,
        husbandRetirementSalary:res.data.data[0].husband[0].husbandRetirementSalary,
        husbandNumberOfWives:res.data.data[0].husband[0].husbandNumberOfWives,
        wifeName: res.data.data[0].wife[0].wifeName,
        wifeNationality: res.data.data[0].wife[0].wifeNationality,
        wifeCivilId: res.data.data[0].wife[0].wifeCivilId,
        wifePhone: res.data.data[0].wife[0].wifePhone,
        isHouseWife:res.data.data[0].wife[0].isHouseWife,
        wifeIsRetired:res.data.data[0].wife[0].wifeIsRetired,
        wifeIsWidow:res.data.data[0].wife[0].wifeIsWidow,
        wifeIsAbandoned:res.data.data[0].wife[0].wifeIsAbandoned,
        wifeIsDisabled:res.data.data[0].wife[0].wifeIsDisabled,
        wifeIsSick:res.data.data[0].wife[0].wifeIsSick,
        wifeIsDeceased:res.data.data[0].wife[0].wifeIsDeceased,
        wifeIsDivorced:res.data.data[0].wife[0].wifeIsDivorced,
        wifeJob:res.data.data[0].wife[0].wifeJob,
        wifeWorksAt:res.data.data[0].wife[0].wifeWorksAt,
        wifeSalary:res.data.data[0].wife[0].wifeSalary,
        wifeIsRetiredFrom:res.data.data[0].wife[0].wifeIsRetiredFrom,
        wifeIsRetirementSalary:res.data.data[0].wife[0].wifeIsRetirementSalary,
        dateOfDivorce:res.data.data[0].wife[0].dateOfDivorce,
        wifeBankNumber:res.data.data[0].wife[0].wifeBankNumber,
        isProductiveFamily:res.data.data[0].wife[0].isProductiveFamily,
        typeOfProductiveFamily:res.data.data[0].wife[0].typeOfProductiveFamily,
        guardianName:res.data.data[0].guardian[0].guardianName,
        guardianCivilId:res.data.data[0].guardian[0].guardianCivilId,
        guardianRelation:res.data.data[0].guardian[0].guardianRelation,
        guardianPhone:res.data.data[0].guardian[0].guardianPhone,
        relativeName:res.data.data[0].relative[0].relativeName,
        relativePhone:res.data.data[0].relative[0].relativePhone,
        relativeRelation:res.data.data[0].relative[0].relativeRelation,
        numberOfResidenceInHouseHold:res.data.data[0].numberOfResidenceInHouseHold,
        maleUnemployedAdultChildren:res.data.data[0].maleUnemployedAdultChildren,
        femaleUnemployedAdultChildren:res.data.data[0].femaleUnemployedAdultChildren,
        numberOfChildrenInElementary:res.data.data[0].numberOfChildrenInElementary,
        numberOfChildrenInSecondary:res.data.data[0].numberOfChildrenInSecondary,
        numberOfChildrenInHighSchool:res.data.data[0].numberOfChildrenInHighSchool,
        numberOfChildrenInHigherEducation:res.data.data[0].numberOfChildrenInHigherEducation,
        salary:res.data.data[0].income[0].salary,
        retirementSalary:res.data.data[0].income[0].retirementSalary,
        socialSecuritySalary:res.data.data[0].income[0].socialSecuritySalary,
        alrahmaSalary:res.data.data[0].income[0].alrahmaSalary,
        darAlataaSalary:res.data.data[0].income[0].darAlataaSalary,
        nafaqaSalary:res.data.data[0].income[0].nafaqaSalary,
        bahwanSalary:res.data.data[0].income[0].bahwanSalary,
        otherSalary:res.data.data[0].income[0].otherSalary,
        oneStoryHouse:res.data.data[0].livingCondition[0].oneStoryHouse,
        twoStoryHouse:res.data.data[0].livingCondition[0].twoStoryHouse,
        apartment:res.data.data[0].livingCondition[0].apartment,
        addition:res.data.data[0].livingCondition[0].addition,
        otherAccommodation:res.data.data[0].livingCondition[0].otherAccommodation,
        owned:res.data.data[0].accommodationStatus[0].owned,
        inherited:res.data.data[0].accommodationStatus[0].inherited,
        combined:res.data.data[0].accommodationStatus[0].combined,
        rent:res.data.data[0].accommodationStatus[0].rent,
        rentAmount:res.data.data[0].accommodationStatus[0].rentAmount,
        lateRentAmount:res.data.data[0].accommodationStatus[0].lateRentAmount,
        lateElectricalAmount:res.data.data[0].accommodationStatus[0].lateElectricalAmount,
        lateWaterAmount:res.data.data[0].accommodationStatus[0].lateWaterAmount,
        numberOfRooms:res.data.data[0].homeDetails[0].numberOfRooms,
        numberOfLivingRooms:res.data.data[0].homeDetails[0].numberOfLivingRooms,
        numberOfSittingRooms:res.data.data[0].homeDetails[0].numberOfSittingRooms,
        numberOfKitchens:res.data.data[0].homeDetails[0].numberOfKitchens,
        numberOfBathrooms:res.data.data[0].homeDetails[0].numberOfBathrooms,
        privateVehicles:res.data.data[0].possessions[0].privateVehicles,
        rentalVehicles:res.data.data[0].possessions[0].rentalVehicles,
        schoolBus:res.data.data[0].possessions[0].schoolBus,
        gasTruck:res.data.data[0].possessions[0].gasTruck,
        waterTruck:res.data.data[0].possessions[0].waterTruck,
        otherPossessions:res.data.data[0].possessions[0].otherPossessions,
        housingLoaner:res.data.data[0].loan[0].housingLoaner,
        housingLoanAmount:res.data.data[0].loan[0].housingLoanAmount,
        housingLoanMonthlyPayments:res.data.data[0].loan[0].housingLoanMonthlyPayments,
        housingLoanAmountDue:res.data.data[0].loan[0].housingLoanAmountDue,
        personalLoaner:res.data.data[0].loan[0].personalLoaner,
        personalLoanAmount:res.data.data[0].loan[0].personalLoanAmount,
        personalLoanMonthlyPayments:res.data.data[0].loan[0].personalLoanMonthlyPayments,
        personalLoanAmountDue:res.data.data[0].loan[0].personalLoanAmountDue,
        vehicleLoaner:res.data.data[0].loan[0].vehicleLoaner,
        vehicleLoanAmount:res.data.data[0].loan[0].vehicleLoanAmount,
        vehicleLoanMonthlyPayments:res.data.data[0].loan[0].vehicleLoanMonthlyPayments,
        vehicleLoanAmountDue:res.data.data[0].loan[0].vehicleLoanAmountDue,
        updatedBy:res.data.data[0].updatedBy,
        dateOfUpdate:res.data.data[0].dateOfUpdate,
        isArchived: res.data.data[0].isArchived,
      }))
      .catch(err => console.log(err));
      Axios.get(`https://dashboard.alrahma-baraka.com:5001/visitReports/print/${this.state.formId}`, {headers:{Authorization: "Bearer" + localStorage.getItem("jwtToken")}})
        .then(res => this.setState({
          report:res.data.data[0].report,
        suggestions:res.data.data[0].suggestions,
        fieldAgentName:res.data.data[0].fieldAgentName,
        fieldAgentPhone:res.data.data[0].fieldAgentPhone,
        dateOfReport:res.data.data[0].dateOfReport,
        panelRecFirst:res.data.data[0].panelRecFirst,
        panelRecSecond:res.data.data[0].panelRecSecond,
        panelRecThird:res.data.data[0].panelRecThird,
        panelRecFourth:res.data.data[0].panelRecFourth,
        panelRecFifth:res.data.data[0].panelRecFifth,
        panelRecSixth:res.data.data[0].panelRecSixth
      }))
        .catch(err => console.log(err));
  }
  render() {
    return (
      <>
      <div dir="rtl">
              <header>
                <figure>
                  <img src={logo} alt="logo" />
                </figure>
              </header>
              <form onSubmit={this.handleSubmit}>
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1>دراسة حالة أسرة:
                          <input id="Text1" type="text" name="claimMadeBy" value={this.state.claimMadeBy} onChange={()=>null} /></h1></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>غير فعال:</label>
                        <input type="checkbox" name="isArchived" checked={this.state.isArchived} />
                        &#160;
                      </td>
                      <td>
                        <input type="submit" name="dad" id="dad" defaultValue="طباعة" />
                      </td>
                    </tr>
                  </tbody></table>
                <table style={{width: '100%'}}>
                  <tbody><tr>
                    </tr>
                  </tbody></table>		
                <datalist id="helptype">
                  <option value="موسمي">
                  </option><option value="أسرة معسرة">
                  </option><option value="كفالة أيتام">
                  </option><option value="ارشيف">
                  </option></datalist><table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="22%"><label width="70%">رقم الاستمارة:</label>
                        <input width="30%" type="number" name="formId" value={this.state.formId} onChange={this.handleChange}/></td>
                      <td width="17%"><label style={{textAlign: 'right'}}>رقم الملف:</label>
                        <input type="number" name="familyId" value={this.state.familyId} onChange={()=>null} /></td>
                      <td width="27%"><label width="60%" style={{textAlign: 'right'}}>تاريخ دراسة الحالة:</label>
                        <input width="40%" type="text" placeholder="yyyy-mm-dd" name="dateOfCaseStudy" value={this.state.dateOfCaseStudy} onChange={()=>null} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>نوع المساعدة:</label>
                        <input list="helptype" name="helptype" value={this.state.typeOfAssistanceNeeded} onChange={()=>null} />
                      </td>	
                    </tr>
                    
                  </tbody></table>		
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td><label style={{textAlign: 'right'}}>المحافظة:</label>
                        <input type="text" name="governorate" value={this.state.governorate} onChange={()=>null} /></td>
                      <td><label style={{textAlign: 'right'}}>الولاية:</label>
                        <input type="text" name="state" value={this.state.state} onChange={()=>null} /></td>
                      <td><label style={{textAlign: 'right'}}>البلدة:</label>
                        <input type="text" name="town" value={this.state.town} onChange={()=>null} /></td>
                      <td><label style={{textAlign: 'right'}}>الحلة:</label>
                        <input type="text" name="neighborhood" value={this.state.neighborhood} onChange={()=>null} /></td>
                    </tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td colSpan={2}><label style={{textAlign: 'right'}}>مصدر الحالة:</label>
                        <input type="text" name="sourceOfCase" value={this.state.sourceOfCase} onChange={()=>null} /></td>
                      <td><label style={{textAlign: 'right'}}>تاريخ الرسالة:</label>
                        <input type="text" placeholder="yyyy-mm-dd" name="dateOfLetter" value={this.state.dateOfLetter} onChange={()=>null} /></td> 
                      <td><label style={{textAlign: 'right'}}>رقم الهاتف:</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={()=>null} /></td>
                    </tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td width="7%"><h1>فئة الاسرة</h1></td>
                      <td width="10%"><label style={{textAlign: 'right'}}>الايتام:</label><input type="checkbox" name="orphan" checked={this.state.orphan} />
                      &#160;</td>
                      <td width="18%"><label width="80%" style={{textAlign: 'right'}}>دخل محدود:</label><input width="20%" type="checkbox" name="limitedIncome" checked={this.state.limitedIncome} />
                        </td>
                      <td width="22%"><label width="80%" style={{textAlign: 'right'}}>أسرة ضمانية:</label><input width="80%" type="checkbox" name="socialSecurity" checked={this.state.socialSecurity}  />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>عجز:</label><input type="checkbox" name="financialIssues" checked={this.state.financialIssues} />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>أخرى:</label><input type="checkbox" name="isOther" checked={this.state.isOther} />
                        </td>
                      <td width="30%"><label style={{textAlign: 'right'}}>أخرى:</label>
                        <input style={{textAlign: 'right'}} type="text" name="other" value={this.state.other} /></td>
                    </tr>
                  </tbody></table>
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>بيانات الزوج</h1></td>
                    </tr>
                  </tbody></table>
                <table id="t02">
                  <tbody><tr>
                      <td width="40%"><label style={{textAlign: 'right'}}>اسم الزوج:</label>
                        <input type="text" name="husbandName" value={this.state.husbandName} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>الجنسية:</label>
                        <input type="text" name="husbandNationality" value={this.state.husbandNationality} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>رقم البطاقة:</label>
                        <input type="text" name="husbandCivilId" value={this.state.husbandCivilId} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>هاتف:</label>
                        <input type="text" name="husbandPhone" value={this.state.husbandPhone} /></td>
                    </tr>
                  </tbody></table>	
                <table>
                  <tbody><tr>
                      <td width="10%"><label style={{textAlign: 'right'}}>يعمل:</label>
                        <input type="checkbox" name="husbandIsWorking" checked={this.state.husbandIsWorking} />
                        &#160;</td>
                      <td width="12%"><label style={{textAlign: 'right'}}>متقاعد:</label>
                        <input type="checkbox" name="husbandIsRetired" checked={this.state.husbandIsRetired} />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>عاطل:</label>
                        <input type="checkbox" name="husbandIsUnemployed" checked={this.state.husbandIsUnemployed} />
                        </td>
                      <td width="14%"><label style={{textAlign: 'right'}}>مسجون:</label>
                        <input type="checkbox" name="husbandIsIncarcerated" checked={this.state.husbandIsIncarcerated} />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>عاجز:</label>
                        <input type="checkbox" name="husbandIsDisabled" checked={this.state.husbandIsDisabled} />
                        </td>
                      <td width="12%"><label style={{textAlign: 'right'}}>مريض:</label>
                        <input type="checkbox" name="husbandIsSick" checked={this.state.husbandIsSick} />
                        </td>
                      <td width="12%"><label style={{textAlign: 'right'}}>متوفى:</label>
                        <input type="checkbox" name="husbandIsDeceased" checked={this.state.husbandIsDeceased} />
                        </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>أخرى:</label>
                        <input type="text" name="OtherHusbandStatus" value={this.state.OtherHusbandStatus} /></td>
                    </tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td width="25%"><label style={{textAlign: 'right'}}>جهة عمل:</label>
                        <input type="text" name="husbandWorksAt" value={this.state.husbandWorksAt} /></td>
                      <td width="25%"><label style={{textAlign: 'right'}}>الوظيفة:</label>
                        <input type="text" name="husbandJob" value={this.state.husbandJob} /></td>
                      <td width="25%"><label style={{textAlign: 'right'}}>مبلغ الراتب:</label>
                        <input type="text" name="husbandSalary" value={this.state.husbandSalary} /></td>
                    </tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td width="25%"><label style={{textAlign: 'right'}}>جهة التقاعد:</label>
                        <input type="text" name="husbandIsRetiredFrom" value={this.state.husbandIsRetiredFrom} /></td>
                      <td width="40%"><label style={{textAlign: 'right'}}>راتب التقاعد:</label>
                        <input type="number" name="husbandRetirementSalary" value={this.state.husbandRetirementSalary} /></td>
                      <td width="40%"><label style={{textAlign: 'right'}}>عدد الزوجات:</label>
                        <input type="number" name="husbandNumberOfWives" value={this.state.husbandNumberOfWives} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>بيانات الزوجة</h1></td>
                    </tr>
                  </tbody></table>
                <table id="t06">
                  <tbody><tr>
                      <td width="40%"><label style={{textAlign: 'right'}}>اسم الزوجة:</label>
                        <input type="text" name="wifeName" value={this.state.wifeName} />
                      </td>
                      <td width="20%"><label style={{textAlign: 'right'}}>الجنسية:</label>
                        <input type="text" name="wifeNationality" value={this.state.wifeNationality} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>رقم المدني:</label>
                        <input type="text" name="wifeCivilId" value={this.state.wifeCivilId} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>هاتف:</label>
                        <input type="text" name="wifePhone" value={this.state.wifePhone} /></td>
                    </tr>
                  </tbody></table>	
                <table>
                  <tbody><tr>
                      <td width="14%"><label style={{textAlign: 'right'}}>ربة منزل:</label>
                        <input type="checkbox" name="isHouseWife" checked={this.state.isHouseWife}  />
                        &#160;</td>
                      <td width="14%"><label style={{textAlign: 'right'}}>متقاعدة:</label>
                        <input type="checkbox" name="wifeIsRetired" checked={this.state.wifeIsRetired}  />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>ارملة:</label>
                        <input type="checkbox" name="wifeIsWidow" checked={this.state.wifeIsWidow}  />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>هجر:</label>
                        <input type="checkbox" name="wifeIsAbandoned" checked={this.state.wifeIsAbandoned} />
                        </td>
                      <td width="9%"><label style={{textAlign: 'right'}}>عجز:</label>
                        <input type="checkbox" name="wifeIsDisabled" checked={this.state.wifeIsDisabled} />
                        </td>
                      <td width="13%"><label style={{textAlign: 'right'}}>مريضة:</label>
                        <input type="checkbox" name="wifeIsSick" checked={this.state.wifeIsSick} />
                        </td>
                      <td width="13%"><label style={{textAlign: 'right'}}>متوفاة:</label>
                        <input type="checkbox" name="wifeIsDeceased" checked={this.state.wifeIsDeceased} />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>مطلقة:</label>
                        <input type="checkbox" name="wifeIsDivorced" checked={this.state.wifeIsDivorced} />
                        </td>
                    </tr>
                  </tbody></table>	
                <table>
                  <tbody><tr>
                      <td width="10%"><label style={{textAlign: 'right'}}>الوظيفة:</label>
                        <input type="text" name="wifeJob" value={this.state.wifeJob} /></td>
                      <td width="13%"><label style={{textAlign: 'right'}}>جهة العمل:</label>
                        <input type="text" name="wifeWorksAt" value={this.state.wifeWorksAt} /></td>
                      <td width="16%"><label style={{textAlign: 'right'}}>مبلغ الراتب:</label>
                        <input type="number" name="wifeSalary" value={this.state.wifeSalary} /></td>
                      <td width="14%"><label style={{textAlign: 'right'}}>جهة التقاعد:</label>
                        <input type="text" name="wifeIsRetiredFrom" value={this.state.wifeIsRetiredFrom} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>مبلغ التقاعد:</label>
                        <input type="number" name="wifeIsRetirementSalary" value={this.state.wifeIsRetirementSalary} /></td>
                      <td width="25%"><label style={{textAlign: 'right'}}>تاريخ الطلاق:</label>
                        <input type="text" placeholder="yyyy-mm-dd" name="dateOfDivorce" value={this.state.dateOfDivorce} /></td>
                    </tr>
                  </tbody></table>	 
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="0%"><label style={{textAlign: 'right'}}>رقم حساب الزوجة في بنك مسقط فقط:</label>
                        <input type="text" name="wifeBankNumber" value={this.state.wifeBankNumber} /></td>
                      <td width="50%"><label style={{textAlign: 'right'}}>هل ترغب الزوجة ان تكون من الاسر المنتجة لمساعدة اسرتها:</label>
                        <input type="checkbox" name="isProductiveFamily" checked={this.state.isProductiveFamily} />
                        </td>
                      <td width="0%"><label style={{textAlign: 'right'}}>نوع المهنة:</label>
                        <input type="text" name="typeOfProductiveFamily" value={this.state.typeOfProductiveFamily} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>بيانات الولي الامر والقريب</h1>
                      </td></tr>
                  </tbody></table>
                <table id="t10">
                  <tbody><tr>
                      <td width="40%"><label style={{textAlign: 'right'}}>اسم ولي  امر الايتام:</label>
                        <input type="text" name="guardianName" value={this.state.guardianName} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>الرقم المدني:</label>
                        <input type="text" name="guardianCivilId" value={this.state.guardianCivilId} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>صلة القرابة:</label>
                        <input type="text" name="guardianRelation" value={this.state.guardianRelation} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>رقم الهاتف:</label>
                        <input type="text" name="guardianPhone" value={this.state.guardianPhone} /></td>
                    </tr>
                  </tbody></table>	
                <table>
                  <tbody><tr>
                      <td width="40%"><label style={{textAlign: 'right'}}>اسم احد الاقارب:</label>
                        <input type="text" name="relativeName" value={this.state.relativeName} /></td>
                      <td width="40%"><label style={{textAlign: 'right'}}>الهاتف:</label>
                        <input type="text" name="relativePhone" value={this.state.relativePhone} /></td>
                      <td width="40%"><label style={{textAlign: 'right'}}>صلة القرابة:</label>
                        <input type="text" name="relativeRelation" value={this.state.relativeRelation} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>بيانات الأسرة</h1></td>
                    </tr>
                  </tbody></table>
                <table id="t01">
                  <tbody><tr>
                      <td width="50%"><label style={{textAlign: 'right'}}>عدد افراد الاسرة المقيمين بالمنزل بصفة دائمة:</label>
                        <input style={{width: '40%'}} type="number" name="numberOfResidenceInHouseHold" value={this.state.numberOfResidenceInHouseHold} /></td>
                      <td width="20%"><h1>عدد الابناء فوق   18  سنة بدون عمل</h1></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>الذكور:</label>
                        <input type="number" name="maleUnemployedAdultChildren" value={this.state.maleUnemployedAdultChildren} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>الاناث:</label>
                        <input type="number" name="femaleUnemployedAdultChildren" value={this.state.femaleUnemployedAdultChildren} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>عدد الطلبة في المراحل الدراسية</h1>
                      </td><td>
                      </td><td width="10%"><label style={{textAlign: 'right'}}>الابتدائي:</label>
                        <input type="number" name="numberOfChildrenInElementary" value={this.state.numberOfChildrenInElementary} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>الاعدادي:</label>
                        <input type="number" name="numberOfChildrenInSecondary" value={this.state.numberOfChildrenInSecondary} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>الثانوي:</label>
                        <input type="number" name="numberOfChildrenInHighSchool" value={this.state.numberOfChildrenInHighSchool} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>المرحلة الجامعية:</label>
                        <input type="number" name="numberOfChildrenInHigherEducation" value={this.state.numberOfChildrenInHigherEducation} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>مصادر دخل الاسرة المعدل الشهري</h1>
                      </td></tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <th width="10%"><label style={{textAlign: 'right'}}>مبلغ الراتب:</label></th>
                      <th width="10%"><label style={{textAlign: 'right'}}>مبلغ التقاعد:</label></th>
                      <th width="10%"><label style={{textAlign: 'right'}}>مبلغ الضمان:</label></th>
                      <th width="10%"><label style={{textAlign: 'right'}}>مبلغ جمعية الرحمة:</label>
                      </th><th width="10%"><label style={{textAlign: 'right'}}>مبلغ دار العطاء:</label></th>
                      <th width="20%"><label style={{textAlign: 'right'}}>مبلغ هيئة الاعمال الخيرية:</label></th>
                      <th width="10%"><label style={{textAlign: 'right'}}>مبلغ بهوان:</label></th>
                      <th width="10%"><label style={{textAlign: 'right'}}>مبالغ اخرى:</label></th>
                    </tr>
                    <tr>
                      <td width="10%"><input type="number" name="salary" value={this.state.salary} /></td>
                      <td width="10%"><input type="number" name="retirementSalary" value={this.state.retirementSalary} /></td>
                      <td width="10%"><input type="number" name="socialSecuritySalary" value={this.state.socialSecuritySalary} /></td>
                      <td width="10%"><input type="number" name="alrahmaSalary" value={this.state.alrahmaSalary} /></td>
                      <td width="10%"><input type="number" name="darAlataaSalary" value={this.state.darAlataaSalary} /></td>
                      <td width="20%"><input type="number" name="nafaqaSalary" value={this.state.nafaqaSalary} /></td>
                      <td width="10%"><input type="number" name="bahwanSalary" value={this.state.bahwanSalary} /></td>
                      <td width="10%"><input type="number" name="otherSalary" value={this.state.otherSalary} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="15%">
                        <h1 style={{backgroundColor: '#ccffcc'}}>نوع السكن</h1>
                      </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>منزل طابق واحد:</label>
                        <input type="checkbox" name="oneStoryHouse" checked={this.state.oneStoryHouse} />
                        </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>منزل طابقين:</label>
                        <input type="checkbox" name="twoStoryHouse" checked={this.state.twoStoryHouse} />
                        </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>شقة:</label>
                        <input type="checkbox" name="apartment" checked={this.state.apartment} />
                        </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>ملحق:</label>
                        <input type="checkbox" name="addition" checked={this.state.addition} />
                        </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>نوع اخر:</label>
                        <input type="text" name="otherAccommodation" checked={this.state.otherAccommodation} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="20%">
                        <h1 style={{backgroundColor: '#ccffcc'}}>نوع حيازة المسكن</h1>
                      </td>
                      <td width="5%"><label style={{textAlign: 'right'}}>ملك:</label>
                        <input type="checkbox" name="owned" checked={this.state.owned} />
                        </td>
                      <td width="5%"><label style={{textAlign: 'right'}}>ورث:</label>
                        <input type="checkbox" name="inherited" checked={this.state.inherited} />
                        </td>
                      <td width="10%"><label style={{textAlign: 'right'}}>مشترك:</label>
                        <input type="checkbox" name="combined" checked={this.state.combined} />
                        </td>
                      <td width="5%"><label style={{textAlign: 'right'}}>ايجار:</label>
                        <input type="checkbox" name="rent" checked={this.state.rent} />
                        </td>
                      <td width="15%"><label style={{textAlign: 'right'}}>(الايجار الشهري):</label>
                        <input type="number" name="rentAmount" value={this.state.rentAmount} /></td>
                      <td width="25%"><label style={{textAlign: 'right'}}>المتأخر من  ايجار المنزل:</label>
                        <input type="number" name="lateRentAmount" value={this.state.lateRentAmount} /></td>
                    </tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td width="15%"><h1>المبالغ المتأخرة</h1></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>مبلغ فاتورة الكهرباء:</label>
                        <input type="number" name="lateElectricalAmount" value={this.state.lateElectricalAmount} /></td>
                      <td width="15%">	<label style={{textAlign: 'right'}}>مبلغ فاتورة الماء:</label>
                        <input type="number" name="lateWaterAmount" value={this.state.lateWaterAmount} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>تفاصيل المنزل</h1>
                      </td></tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td width="15%"><label style={{textAlign: 'right'}}>عدد الغرف:</label>
                        <input type="number" name="numberOfRooms" value={this.state.numberOfRooms} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>عدد المجالس:</label>
                        <input type="number" name="numberOfLivingRooms" value={this.state.numberOfLivingRooms} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>عدد الصالات:</label>
                        <input type="number" name="numberOfSittingRooms" value={this.state.numberOfSittingRooms} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>عدد المطابخ:</label>
                        <input type="number" name="numberOfKitchens" value={this.state.numberOfKitchens} /></td>
                      <td width="15%"><label style={{textAlign: 'right'}}>عدد الحمامات:</label>
                        <input type="number" name="numberOfBathrooms" value={this.state.numberOfBathrooms} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>ممتلكات الاسرة</h1>
                      </td></tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <td width="18%"><label style={{textAlign: 'right'}}>عدد السيارات الخاصة:</label>
                        <input type="number" name="privateVehicles" value={this.state.privateVehicles} /></td>
                      <td width="10%"><label style={{textAlign: 'right'}}>سيارة أجرة:</label>
                        <input type="number" name="rentalVehicles" value={this.state.rentalVehicles} /></td>
                      <td width="10%"><label style={{textAlign: 'right'}}>حافلة مدرسة:</label>
                        <input type="number" name="schoolBus" value={this.state.schoolBus} /></td>
                      <td width="10%"><label style={{textAlign: 'right'}}>سيارة غاز:</label>
                        <input type="number" name="gasTruck" value={this.state.gasTruck} /></td>
                      <td width="10%"><label style={{textAlign: 'right'}}>سيارة نقل مياه:</label>
                        <input type="number" name="waterTruck" value={this.state.waterTruck} /></td>
                      <td width="10%"><label style={{textAlign: 'right'}}>نوع اخر:</label>
                        <input type="text" name="otherPossessions" value={this.state.otherPossessions} /></td>
                    </tr>
                  </tbody></table>	
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td>
                        <h1 style={{backgroundColor: '#ccffcc'}}>القروض</h1>
                      </td></tr>
                  </tbody></table>
                <table>
                  <tbody><tr>
                      <th width="20%"><h1 style={{backgroundColor: '#ccffcc'}}>نوع</h1></th>
                      <th width="35%"><h1 style={{backgroundColor: '#ccffcc'}}>اسم الجهة المانحة للقرض او التمويل</h1></th>
                      <th width="15%"><h1 style={{backgroundColor: '#ccffcc'}}>مبلغ القرض</h1></th>
                      <th width="15%"><h1 style={{backgroundColor: '#ccffcc'}}>القسط الشهري</h1></th>
                      <th width="15%"><h1 style={{backgroundColor: '#ccffcc'}}>المبلغ المتبقي</h1></th>
                    </tr>
                    <tr>
                      <td><h1 style={{backgroundColor: '#ccffcc'}}>القروض السكنية</h1></td>
                      <td><input type="text" name="housingLoaner" value={this.state.housingLoaner} /></td>
                      <td><input type="number" name="housingLoanAmount" value={this.state.housingLoanAmount} /></td>
                      <td><input type="number" name="housingLoanMonthlyPayments" value={this.state.housingLoanMonthlyPayments} /></td>
                      <td><input type="number" name="housingLoanAmountDue" value={this.state.housingLoanAmountDue} /></td>
                    </tr>
                    <tr>
                      <td><h1 style={{backgroundColor: '#ccffcc'}}> القروض الشخصية</h1></td>
                      <td><input type="text" name="personalLoaner" value={this.state.personalLoaner} /></td>
                      <td><input type="number" name="personalLoanAmount" value={this.state.personalLoanAmount} /></td>
                      <td><input type="number" name="personalLoanMonthlyPayments" value={this.state.personalLoanMonthlyPayments} /></td>
                      <td><input type="number" name="personalLoanAmountDue" value={this.state.personalLoanAmountDue} /></td>
                    </tr>
                    <tr>
                      <td><h1 style={{backgroundColor: '#ccffcc'}}>قروض شراء سيارة</h1></td>
                      <td><input type="text" name="vehicleLoaner" value={this.state.vehicleLoaner} /></td>
                      <td><input type="number" name="vehicleLoanAmount" value={this.state.vehicleLoanAmount} /></td>
                      <td><input type="number" name="vehicleLoanMonthlyPayments" value={this.state.vehicleLoanMonthlyPayments} /></td>
                      <td><input type="number" name="vehicleLoanAmountDue" value={this.state.vehicleLoanAmountDue} /></td>
                    </tr>
                  </tbody></table>
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="50%"><label style={{textAlign: 'right'}}>تم التحديث بواسطة:</label>
                        <input type="text" name="updatedBy" value={this.state.updatedBy} /></td>
                      <td width="30%"><label style={{textAlign: 'right'}}>تاريخ التحديث:</label>
                        <input type="text" placeholder="yyyy-mm-dd" name="dateOfUpdate" value={this.state.dateOfUpdate} /></td>
                    </tr><tr>
                    </tr></tbody></table>
                <br />
                <h1>تقرير الباحث الاجتماعي عن حالة الاسرة</h1><textarea name="Social_research_details" id="text1" row={5} cols={100} wrap="hard" autoComplete="on" value={this.state.report} /><h1>اقتراحات الباحث</h1><textarea value={this.state.suggestions} id="text2" row={5} cols={100} wrap="hard" /><table style={{width: '100%'}}>
                  <tbody><tr>
                    </tr>
                    <tr>
                    </tr><tr>
                    </tr>
                    <tr>
                    </tr>
                  </tbody></table>
                <table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="40%"><label> اسم الباحث</label>
                        <input type="text" name="fieldAgentName" value={this.state.fieldAgentName} /></td>
                      <td width="20%"><label style={{textAlign: 'right'}}>رقم الهاتف:</label>
                        <input type="text" name="fieldAgentPhone" value={this.state.fieldAgentPhone} /></td>
                      <td width="30%"><label style={{textAlign: 'right'}}>تاريخ البحث:</label>
                        <input type="text" name="dateOfReport" value={this.state.dateOfReport} /></td>		
                    </tr></tbody></table>
                <br />
                <h1>توصيات اللجنة</h1>
                <br /><table style={{width: '100%'}}>
                  <tbody><tr>
                      <td width="100%"><label>1</label>
                        <input type="text" name="panelRecFirst" value={this.state.panelRecFirst} /></td>
                    </tr>
                    <tr>
                      <td width="100%"><label>2</label>
                        <input type="text" name="panelRecSecond" value={this.state.panelRecSecond} /></td>
                    </tr>
                    <tr>
                      <td width="100%"><label>3</label>
                        <input type="text" name="panelRecThird" value={this.state.panelRecThird} /></td>
                    </tr>
                    <tr>
                      <td width="100%"><label>4</label>
                        <input type="text" name="panelRecFourth" value={this.state.panelRecFourth} /></td>
                    </tr>
                    <tr>
                      <td width="100%"><label>5</label>
                        <input type="text" name="panelRecFifth" value={this.state.panelRecFifth} /></td>
                    </tr>
                    <tr>
                      <td width="100%"><label>6</label>
                        <input type="text" name="panelRecSixth" value={this.state.panelRecSixth} /></td>
                    </tr>
                  </tbody></table>
              </form></div>
            </>
        );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
      <ReactToPrint
        trigger={() => <button>طباعة الصفحة</button>}
        content={() => this.componentRef}
      />
      <PrintPage ref={el => (this.componentRef = el)} />
    </div>
    )
  }
}