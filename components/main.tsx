import Image from 'next/image'
import SVG1 from './svg1';
import SVG2 from './svg2';
import SVG3 from './svg3';
import SvgGroupe from './svgGroupe';
import Button from '@mui/material/Button';
export default function Main (){
    return (<>
                                <div className='background_image'>
                {/* <Image src="/img.png" alt="img" width={1485} height={695} /> */}
                </div>
                <main className='main'>
                {/* <div className="custom-shape-divider-top-1639311150">
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                      </svg>
                  </div> */}
                {/* <div className='svg-1'><SVG1/> </div>
                <div className='svg-2'><SVG3/></div>
                <div className='svg-3'><SVG2/></div> */}
               <div className='svg-group'> 
               <SvgGroupe/>
                </div>
                <div className="header"> 
                  <div><Image src="/logo-1.png" alt="logo" width={48}  height={56}/></div>
                  <div className='header-text'>Главная</div>
                  <div className='header-text'>Рейтинг</div>
                  <div className='header-text'>Блог</div>
                  <div className='header-text'>PRO</div>
                  <div className='header-link'>Инвестору</div>
                  <div className='header-text'></div>
                  <button className='header__button'>RU</button>
                  <button className='header__button'>Войти</button>
                  <button className='header__button'>Начать</button>
                </div>
                <div className='description-containers'>
                  <div className='description-text'>Поделитесь своими результатами</div>
                  <div className='description-text-colored'>И получите доверие большого количества инвестров</div>
                </div>
                <div className='buttons-container'>
                  <button className='button-start'>Начать</button>
                  <button className='button-traider'>Я трейдер</button>
                </div>
                {/* <div className="background_svg">qdfthrgtr</div> */}
                </main>
    </>

    )
}