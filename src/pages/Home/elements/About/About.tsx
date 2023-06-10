/*
Copyright 2023-present 4324 Lost in Time

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import "./About.css";
import placeholder from "../../../../assets/placeholder.png"

export function About() {
    return (
        <div className="About">
            <div className="About__container">
                <div className="About__image-container">
                    <img src={placeholder} alt="" />
                </div>

                <div className="About__text-container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati magnam impedit expedita, sunt non excepturi
                    mollitia facilis reprehenderit aliquid vitae ratione quas,
                    omnis, sed est error sequi vel reiciendis illum consequuntur
                    iure eligendi tenetur cumque. Non culpa id excepturi atque.
                </div>
            </div>
        </div>
    );
}
