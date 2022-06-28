import React, {Component} from "react";
import LangContext from "../LangContext";

class Message extends Component{
    static contextType = LangContext;
    render(){
        const lang = this.context;
        if (lang === "en")
            return(
                <p>
                    "Context provides a way to pass data through the component tree without having to pass props down manually at every level"
                </p>
            );
            else
                return(
                    <p>
                        "컨텍스트는 모든 레벨에서 일일이 props를 넘기지 않고도 컴포넌트 트리에 걸쳐서 데이터를 전달할 수 있는 방법을 제공합니다."
                    </p>
                );
    }
}

export default Message;