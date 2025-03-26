## 왜 이 지식을 탐구하게 되었나
Hacker news의 사이드 프로젝트 파쿠리를 하다가, spec 설정을 마치고 다음 챕터가 Bootstrap project였어. 그래서 이게 뭔가 싶어서 찾아보게 되었습니다.

## 무엇인가

**Bootstrap**은 웹 개발에서 사용되는 **프론트엔드 프레임워크**로, HTML, CSS, 그리고 JavaScript 기반의 **반응형 웹 디자인**과 **UI 컴포넌트**를 쉽게 구현할 수 있도록 돕는 도구입니다.

### 주요 특징

1. **반응형 디자인**
    
    - 모바일, 태블릿, 데스크톱 등 다양한 디바이스 크기에 적응하는 레이아웃을 쉽게 설계할 수 있습니다.
    - `Grid System`을 제공하여 요소를 쉽게 배치 가능.
2. **미리 만들어진 컴포넌트**
    
    - 버튼, 네비게이션 바, 모달, 알림창, 폼 등 자주 사용하는 UI 요소가 기본적으로 포함되어 있습니다.
    - 이 요소들을 **클래스 이름**만 추가해서 손쉽게 적용 가능.
3. **스타일 일관성**
    
    - 미리 정의된 디자인 템플릿과 스타일이 제공되므로 프로젝트의 일관성을 유지하기 쉽습니다.
4. **커스터마이징 가능**
    
    - 필요에 따라 기본 스타일을 덮어쓰거나 커스터마이징해서 사용할 수 있습니다.
5. **오픈소스**
    
    - 무료로 사용 가능하며, GitHub에서 소스 코드를 확인하고 필요 시 수정 가능.

---

### 어떻게 동작하나요?

Bootstrap은 기본적으로 **CSS와 JavaScript 라이브러리**로 구성되어 있으며, 웹 페이지에 다음과 같이 추가해서 사용할 수 있습니다:

1. **CDN 링크 사용**  
    간단히 HTML 문서에 아래와 같은 링크를 추가:
    
    ```html
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    ```
    
2. **다운로드 후 사용**  
    Bootstrap 파일을 다운로드하여 프로젝트에 직접 포함하고 사용.
    

---

### 예제 코드

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 예제</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1 class="text-center text-primary">Hello, Bootstrap!</h1>
        <button class="btn btn-success">클릭하세요</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

위 코드는 Bootstrap을 사용해 간단한 버튼과 텍스트를 스타일링한 예입니다.

---

### Bootstrap이 언제 유용한가요?

- 빠르게 프로토타입을 제작해야 할 때.
- 다양한 디바이스와 해상도에서 잘 동작하는 **반응형 웹**이 필요할 때.
- **UI/UX 디자인**에 시간을 많이 들이지 않고 기본적인 스타일을 제공받고 싶을 때.

Bootstrap은 특히 **웹 초보자**나 **빠른 개발**이 필요한 상황에서 많이 사용됩니다. 😄
## 이어지는 호기심

그럼 flutter를 테크 스택에 넣은 나는 안 해도 되겠다.