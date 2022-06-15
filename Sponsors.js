import React from 'react'
import './Sponsors.css'
import adidas from './Assets/Sponsors/Adidas_Comp_LightBG_180xAuto1547460175451.png'
import aeroflot from './Assets/Sponsors/Aeroflot-For-Light-BG-180pxWide1574161673094.png'
import apollo from './Assets/Sponsors/Apollo_Comp_LightBG_180xAuto1547460405742.png'
import cadbury from './Assets/Sponsors/Cadbury-new-2021-footer-log1609838831293.png'
import canon from './Assets/Sponsors/Canon-Medical-2000x11251588088643865.jpg'
import cdd from './Assets/Sponsors/CDD_Comp_LightBG_180xAuto1547461184438.png'
import chevrolet from './Assets/Sponsors/Chevrolet_Comp_LightBG_180xAuto1547460485843.png'
import chivas from './Assets/Sponsors/Chivas_Comp_LightBG_180xAuto1547460586288.png'
import dhl from './Assets/Sponsors/DHL_Comp_LightBG_180xAuto1547461021282.png'
import ecolab from './Assets/Sponsors/Ecolab_Footer_Logo1628602152956.png'
import gulf from './Assets/Sponsors/Gulf_Comp_LightBG_180xAuto1547462001929.png'
import hcl from './Assets/Sponsors/HCL_Comp_LightBG_180xAuto1547462065520.png'
import hth from './Assets/Sponsors/HTH_footer_logo1620932420633_img1x.png'
import kohler from './Assets/Sponsors/Kohler_Comp_LightBG_180xAuto1547470544622.png'
import konami from './Assets/Sponsors/Konami_PartnerFooter1562073557221.png'
import mariott from './Assets/Sponsors/Marriott-onLightBG1571253423487.png'
import mauiJim from './Assets/Sponsors/MauiJim-on-White-BG1550230930070.png'
import melitta from './Assets/Sponsors/Melitta_Comp_LightBG_180xAuto1547470651869.png'
import remington from './Assets/Sponsors/Remington-Logo-OnWhiteBG1549538227044.png'
import reg from './Assets/Sponsors/RenewableEnergyGroup_Logo_PNG1626936371200.png'
import teamviewer from './Assets/Sponsors/TeamViewer-logo-blue-footer1625085543829.png'
import tezoslogo from './Assets/Sponsors/TezosLogo_Horizontal_Black_21644483053582.png'
import visitmalta from './Assets/Sponsors/VisitMalta_WhiteBG1568380587328.png'


function Sponsors() {
  return (
    <div className='sponsors'>
        <div className="main__sponsors">
            <img src={adidas} alt="" />
            <img src={teamviewer} alt="" />
            <img src={tezoslogo} alt="" />
            <img src={kohler} alt="" />
        </div>
        <div className="other__sponsors">
            <div className="first__row">
                <img src={apollo} alt="" />
                <img src={cadbury} alt="" />
                <img src={canon} alt="" />
                <img src={cdd} alt="" />
                <img src={chevrolet} alt="" />
                <img src={chivas} alt="" />
                <img src={dhl} alt="" />
                <img src={ecolab} alt="" />
                <img src={gulf} alt="" />
                <img src={hcl} alt="" />
            </div>
            <div className="second__row">
                <img src={hth} alt="" />
                <img src={konami} alt="" />
                <img src={mariott} alt="" />
                <img src={mauiJim} alt="" />
                <img src={melitta} alt="" />
                <img src={remington} alt="" />
                <img src={reg} alt="" />
                <img src={visitmalta} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sponsors