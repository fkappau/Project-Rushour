import React from 'react'
import {useAppContext} from '../../../Store/Context'
import Button from '../../../Components/Button'
import Dcss from './Req.module.css'
import Select from '../../../Components/Selections'
import Inputfield from '../../../Components/Inputfields'
import User from '../../../images/suggest.jpg'
function Requested() {
    const {updateValues,values} = useAppContext();
    function Getvalues (){
        console.log(values);

        // var temparray = traffic
        // console.log(`temparray: ${temparray}`);
    }
    return (
  
        <div className={Dcss.main}>
            <div className={Dcss.lef}>
                    <div className = {Dcss.sug}>
                                <h4 className = {Dcss.head}>REQUEST FOR <br/> TRAFFIC</h4>
                                <Inputfield label="Current Location :" name ="location" className={Dcss.inpute} placeholder="e.g where are u right now " type="text" onChange={updateValues}/>
                                <Inputfield label="Destination :" name ="destination" className={Dcss.inpute} placeholder="e.g where re you heading " type="text" onChange={updateValues}/>
                                <Inputfield label=" Time :" name ="time" className={Dcss.inpute} type="time" />
                                <Inputfield label=" Date :" name ="time" className={Dcss.inpute} type="date" />
                                <Button text="Request" height="35px" width="300px" className={Dcss.ibtn} onClicj={Getvalues}/>
                    </div>
            </div>
            <div className={Dcss.rit}>
                <div className={Dcss.ritt}>
                   
                    <div className={Dcss.ritt1}>
                        <p className={Dcss.ptg1}>Feel free to ask for help,we are one big selfless family.whatever your request,someone out there is ready to respond</p>
                                    
                    </div>
                    <div className={Dcss.ritt2}>
                        <p className={Dcss.ptg}>Don't forget to update us on the  traffic in your locality.Your tiny effort could go a long way to save  a life,improve productivity and  make the country a better place</p>
                        <img src={User} className={Dcss.imge} alt="user"/>
                    </div>
                </div>
                <div className={Dcss.ritb}>
                    <div className={Dcss.ritb1}>
                        <h4 >Traffic Updates</h4>
                        <Inputfield label="suggested Requests: " name ="Sug Area" className={Dcss.inpute} placeholder="e.g off Asafo - Tech Road" type="text" onChange={updateValues}/>
                    </div>
                    <div className={Dcss.ritb2} >

                        <div>
                            <Inputfield label="Area/Road: " name ="Sug Area" className={Dcss.inpute} placeholder="e.g off Asafo - Tech Road" type="text" onChange={updateValues}/>
                            <Select text2="Traffic" text1="Road Block" name="select" text3="Accident" text4="Police Inspection" className={Dcss.select} onChange={updateValues} />
                            <Inputfield label="Description :" name ="Sug Desc" className={Dcss.inpute} placeholder="where are u talking about?" onChange={updateValues}/>
                        </div>
                        <div>
                            <Inputfield label="Suggest Route :" name ="Sug Route" className={Dcss.inpute} placeholder="e.g use ... route " type="text" onChange={updateValues}/>
                            <Inputfield label="distance per minute :" name ="Distance trav" className={Dcss.inpute} placeholder="1m/hr " type="text" onChange={updateValues}/>
                            <Inputfield label=" Time :" className={Dcss.inpute} name="time" placeholder="e.g 10:00pm " type="time" onChange={updateValues} />
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
      
    
       
    )
}

export default Requested;
