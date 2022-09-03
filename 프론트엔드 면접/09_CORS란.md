## CORS

👉 CORS란?

우선 CORS란 Cross-Origin Resource Sharing으로 교차(다른) 출처 리소스 공유이다.
출처가 서로 같다고 판단하는 로직 자체는 굉장히 간단하다.
두 URL 구성 요소 중 Scheme, Host, Port, 이 3가지만 동일하면 된다.
ex) https://evan-moon.github.io:80

scheme : https://
host : even-moon.github.io
port : :80
이것만 같다면 나머지는 전부 다르더라도 같은 출처로 인정이된다.
CORS는 서로 다른 출처간에 리소스를 전달하는 방식을 제어하는 체제.
CORS요청이 가능 하려면 서버에서 특정 헤더인 Access-Control-ALlow-Origin과 함께 응답할 필요가 있다.

👉 해결방법

웹 프론트 측에서 request header에 CORS 관련 옵션을 넣어주고, 서버에서는 해당 프론트 요청을 허용하면 됨