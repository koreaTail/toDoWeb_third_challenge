const quotes = [
    {
        quote: "실패는 더 나은 시도를 할 수 있는 지혜를 선물한다."
    },
    {
        quote: "통제가능한 행동목표는 당신을 행동하게 만든다."
    },
    {
        quote: "그대가 공중에 누각을 쌓았더라도 그것은 헛된 일이 아니다. 누각은 원래 공중에 있어야 하니까. 이제 그 밑에 토대만 쌓으면 된다."
    },
    {
        quote: "처음엔 못하는 게 당연하다. 그걸 받아드리는 것이 잘하게 되는 첫걸음이다."
    },
    {
        quote: "성공과 실패를 보상하라. 그러나 아무것도 하지 않은 경우에는 처벌하라."
    },
    {
        quote: "기록하라. 기록하라. 기록하라. 기록하라."
    },
    {
        quote: "원한다면, 멈추지 마라."
    },
    {
        quote: "지금 하는 일의 본질이 무엇인가. 인지하고. 그에 맞게 행동하라."
    },
    {
        quote: "당신을 괴롭히는 부분은 구체적으로 무엇인가. 거기에 당신에 대한 힌트가 있다."
    },
    {
        quote: "제목에는 핵심 키워드와 글의 방향성이 함께 드러나야 하고, 그것이 충족된다면 개성있게 표현해도 좋다."
    },

]

const quote = document.querySelector("#quote span:first-child")

quote.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote


