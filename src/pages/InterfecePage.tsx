import { CodeBlock, StudyTemplate } from "../components";

const InterfecePage = () => {
  return (
    <div>
      <StudyTemplate 
              title=" 타입 지정하기 / 인터페이스 "
        learned={`
변수마다(여러 곳에서) 필드를 일일이 다 넣어줘야 하니까 너무 귀찮다
그래서 객체 타입에 이름을 붙여서 만들어보자
그게 바로 interface와 type이다

이런 식으로 미리 정의해두면
{필드: 타입, 필드: 타입, ...}
을 매번 길게 쓰지 않고,
그냥 변수명: 타입이름 처럼 재사용할 수 있다
(단, 값은 여전히 {...} 형태로 넣어줘야 한다)

타입을 수정할 때도 한 곳에서 타입 정의만 바꾸면
그 타입을 쓰는 모든 곳에서 타입 체크 기준이 같이 바뀐다

type은 = 으로 정의한다

아래와 같이 네이밍 규칙을 쓰기도 한다
( 인터페이스는 I, 타입은 T를 붙이기도 함)

인터페이스는 객체 구조를 정의하는 용도로 사용된다.
객체 형태만 가능하고, 원시 타입이나 튜플, 유니온 타입 자체는 정의할 수 없다

타입(type)은 더 다양하고 넒은 용도 사용할 수 있다
원시 타입, 튜플 타입, 유니온 타입, 등 가능하다

type Tuple = [number, string, boolean];
type Id = string | number;

type은 타입 | 타입 같은 유니온 타입을 바로 정의할 수 있지만
interface는 타입 전체를 유니온으로 만들 수 없고
{ field: 타입 | 타입 } 처럼 필드 내부에서만 유니온을 사용할 수 있다

사람(Person)이라는 인터페이스를 정의했다.
사람에게 필요한 기본 정보를 정의한 뒤 외국인 여부처럼 필수라기보다는 
확장 개념에 가까운 정보라면 interface에서는 extends를 사용해 확장한다

interface ForeignPerson extends Person {
  isForeign: boolean;
}

type에서는 교차 타입(&) 을 사용해 확장한다.
type ForeignPerson = Person & {
  isForeign: boolean;
};
 |(유니온 타입)은 확장이 아니라
 이거나 저거나 를 의미하므로 확장 용도로 쓰면 안 된다

type 형태에서는 인터페이스 && {확장 개념의 필드를 그냥 입력해줌}
type 확장명 =  인터페이스 | {확장 개념의 필드를 그냥 입력해줌}
유니온 타입의 경우 인터페이스 위 타입을 포함해서 다시 만들경우 오류 발생

확장한 인터페이스를 적용해보자
적용하면 확장 인터페이스에 정의된 필드뿐만 아니라
부모 인터페이스의 필드까지 모두 입력하라는 타입 오류가 발생한다

반대로, 기존 부모 인터페이스 타입에서
확장 인터페이스의 필드를 사용하려고 하면 오류가 발생한다
부모 타입에는 해당 필드가 존재한다고 볼 수 없기 때문이다

type에서
부모인터페이스 | { 확장 개념의 필드 } 처럼 정의한 경우
확장 필드만 가진 객체도 단독으로 사용할 수 있다
이는 확장이 아니라 유니온 타입의 특성 때문이다
이를 &(교차 타입)으로 바꾸면
부모 인터페이스의 필드와 확장 필드 모두를 필수로 입력하라는 타입 오류가 발생한다
            `}
        reason=""
      />

      <CodeBlock
        title="문제 1"
        question={`
사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:
id: 고유 ID (숫자)
name: 이름 (문자열)
email: 이메일 (문자열, 선택 속성)
            `}
        code={`
// 인터페이스 작성

interface IUserInfo {
    id: number;
    name: string;
    email?: string;
}

// 타입 작성

type TUserInfo = {
    id: number;
    name: string;
    eamil?: string;
};

const user : IUserInfo= {
  id: 1,
  name: "Alice",
};

const userWithEmail: TUserInfo= {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};
`}/>

      <CodeBlock
        title="문제 2"
        question={`
아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.
사용자(User)는 다음 속성을 가집니다:
id: 숫자
name: 문자열
address: 객체 ({city: 문자열,zipCode: 숫자})
            `}
        code={`
// User 타입을 작성하세요.
// 여기에 작성

type TUserInfo = {
    id: number;
    name: string;
    address: {
      city: string;
      zipCode:number;
      }
}

// User 타입을 사용하여 아래 객체를 작성하세요.
const user:TUserInfo = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};
`}/>

      <CodeBlock
        title="문제 3"
        question={`
아래 조건에 따라 인터페이스를 확장하세요.
1. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?)
2. 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 
관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.
            `}
        code={`
// User 인터페이스 작성
// 여기에 작성

interface IUserInfo {
  id: number;
  name: string;
  email?: string;
}

// Admin 인터페이스 작성 (User 확장)
// 여기에 작성
interface IAdmin extends IUserInfo {
  role: stgring;
}


const normalUser:IUserInfo = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: Iadmin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

`}/>

      <CodeBlock
        title="문제 4"
        question={`
아래 조건에 따라 type을 확장하세요.
1. 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)
2. 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 
추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.
            `}
        code={`
// Product 타입 작성
// 여기에 작성
type TProduct = {
   id: number;
   name: string;
   price: number;
};

// DiscountedProduct 타입 작성 (Product 확장)
// 여기에 작성
type TDiscountedProduct: TProduct = {
   discount: number;
}

const normalProduct: TProduct  = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: TDiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};
`}/>

      <CodeBlock
        title="문제 5"
        question={`
아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
1. 상품(Product)은 다음 속성을 가집니다:
- id: 숫자
- name: 문자열
- price: 숫자
2. 주문(Order)은 다음 속성을 가집니다:
- orderId: 숫자
- products: Product 타입 배열
- totalPrice: 숫자
            `}
        code={`
// Product 타입 작성
// 여기에 작성
interfece IProduct {
   id: number;
   name: string;
   price: number;
}

// Order 타입 작성
// 여기에 작성

interface IOrder {
   orderId: number;
   products: Iproduct[];
   totalPrice: number;
}



// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: IOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};
`}/>


      <CodeBlock
        title="문제 6"
        question={`
아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
1. BaseUser라는 인터페이스를 작성하세요:
- id: 숫자
- name: 문자열
2. AdminUser라는 타입을 작성하세요:
- BaseUser를 확장합니다.
- 추가로 role: 문자열을 포함합니다.
3. GuestUser라는 타입을 작성하세요:
- BaseUser를 확장합니다.
- 추가로 visitCount: 숫자를 포함합니다.
            `}
        code={`
// BaseUser 인터페이스 작성
// 여기에 작성
interface IBaseUser {
   id: number;
   name: string;
}

// AdminUser 타입 작성
// 여기에 작성
type TAdminUser = IBaseUser & {
   role: string;
}

// GuestUser 타입 작성
// 여기에 작성
type TGuestUser = IBaseUser & {
  visitCount: number;
};


// 아래 객체를 작성하세요.
const admin: IAdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: TGuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};
`}/>

    </div>
  );
};

export default InterfecePage;
