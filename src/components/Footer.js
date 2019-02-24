import React from 'react';


const Footer = () => {
    return (
        <footer class="pa4 pa5-l black-70 bt b--black-10">
            <div class="mb4-l cf">
                <h2 class="fl w-100 pv0 f6 fw6 ttu tracked mb4">Studios</h2>
                <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
                    <h4 class="f5 f4-l fw6">SF</h4>
                    <span class="f7 f6-l db black-70">837 Larkin St.</span>
                    <span class="f7 f6-l black-70">San Francisco, CA 94109 </span>
                    <a class="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
                        +1 207-555-5555
                    </a>
                </article>
                <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
                    <h4 class="f5 f4-l fw6">LA</h4>
                    <span class="f7 f6-l db black-70">
                        1111 Manor Way
                    </span>
                    <span class="f7 f6-l di black-70">
                        Los Angeles, CA 90048
                    </span>
                    <a href="tel:+13235555555" class="f6 db fw6 pv3 link dim black-70" title="Call the LA office.">
                        +1 323-555-5555
                    </a>
                </article>
                <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
                    <h4 class="f5 f4-l fw6">London</h4>
                    <span class="f7 f6-l db black-70">11 Downey St.</span>
                    <span class="f7 f6-l black-70">London, UK</span>
                    <a href="tel:+5555555555" class="link dim f6 db fw6 pv3 black-70" title="Call the London office">+44 0 5555-5555</a>
                </article>
                <article class="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
                    <h4 class="f5 f4-l fw6">Tokyo</h4>
                    <span class="f7 f6-l db black-70">1982 Flangan Rd.</span>
                    <span class="f7 f6-l">Shinjuku, Tokyo</span>
                    <a href="tel:+444444444444" class="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
                        +99 5555-5555
                    </a>
                </article>
            </div>
            <section class="cf mb5">
                <div class="mb4 mb0-ns w-100 w-50-l fr">
                    <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com" >
                        hello@yourcompany.com
                    </a>
                </div>
                <div class="mb4 mb0-ns fl w-100 w-50-l" >
                    <p class="f4 fw6 mb2 f6 mt0">
                        Sign up for our newsletter.
                    </p>
                    <input placeholder="Email Address" class="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" />
                    <input type="submit" class="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray" />
                </div>
            </section>
            
            <div class="db dn-ns">
                <p class="f7 black-70 mt4 tc">
                    Copyright © Your Company 2019
                </p>
            </div>
        </footer>
    );
};

export default Footer;