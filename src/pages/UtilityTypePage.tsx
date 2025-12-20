
import { CodeBlock, StudyTemplate } from "../components";

const UtilitytypePage = () => {
  return (
    <div>
      <StudyTemplate
        title=" 유틸리티 타입 - 더하고 뺴고 ? "
        learned={`
            유틸리티 타입 Omit / Pick / Partial
            Omit : 이 항목만 빼고 보여주는 
            Omit은 기존 타입에서 특정 항목을 제외해서 새로운 타입을 만든다 보안 정보 분리에 아주 자주 쓰인다
            양식을 채우는데 특정 항목만 가려서 새 양식을 만드는 느낌 필드가 추가/변경돼도 자동 반영됨
            Omit은 원본 타입 복사해서 특정 항목만 제거함 

            Pick : 이것만 골라서 쓰는 미니 
            Pick은 기존 타입에서 필요한 속성만 선택 해서 새 타입을 만든다
            전체 정보가 필요 없을 때 / 최소한의 정보만 전달하고 싶을 때 
            필요한 걸 뽑아가지고 사용한다

            Partial : 빈칸 허용 수정 
            Partial은 타입의 모든 속성을 있어도 되고 없어도 되게 만든다
            ? 옵셔널 처리한다
            수정 상황을 고려해서 반영하기 위한 타입
            `}
        reason={``}
      />

      <CodeBlock
        title="문제 1"
        question={`
            회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다.
            기본 타입 정의:

            User: 회원 정보 (이름, 이메일, 비밀번호).
            Partial을 활용: 모든 속성을 선택 속성으로 변경하는 타입을 생성하세요.
            함수 작성:

            함수 이름: updateUserForm.
            입력: 기존 사용자 데이터와 업데이트된 폼 데이터.
            출력: 업데이트된 사용자 데이터.

            `}
        code={`
type User = {
  name: string;
  email: string;
  password: string;
};

// 함수 작성
function updateUserForm(
  user: User,
  updates: Partial<User>
): User {
  // 여기에 구현
  return { ...user, ...updates };
}

// 테스트 코드
const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }
            `}
      />

      <CodeBlock
        title="문제 2"
        question={`
        프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다.
        기본 타입 정의:

        UserProfile: 사용자 프로필 정보 (아이디, 이름, 이메일, 주소).
        Pick을 활용:

        프로필 페이지에 필요한 데이터(아이디와 이름)만 추출하는 타입을 정의하세요.
        함수 작성:

        함수 이름: getProfileSummary.
        입력: 전체 사용자 정보.
        출력: 필요한 속성만 포함된 객체.

            `}
        code={`
type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

// 함수 작성
function getProfileSummary(
  user: UserProfile
): Pick<UserProfile, "id" | "name"> {
  // 여기에 구현
  return { id: user.id, name: user.name };
}

// 테스트 코드
const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }

            `}
      />

            <CodeBlock
        title="문제 3"
        question={`
        1. 기본 타입 정의:
        User: 사용자 정보 (이름, 이메일, 비밀번호, 역할).
        
        2. Omit을 활용:
        민감한 정보를 제외한 타입을 정의하세요. (비밀번호는 제외)
        
        3. 함수 작성:
        함수 이름: filterSensitiveInfo.
        입력: 전체 사용자 정보.
        출력: 민감한 정보가 제외된 객체. `}
        
        code={`
type User = {
  name: string;
  email: string;
  password: string;
  role: string;
};

// 함수 작성
function filterSensitiveInfo(
  user: User
):  Omit<User, "password"> {
  // 여기에 구현
  const { password, ...filteredInfo } = user;
  return filteredInfo;
}

// 테스트 코드
const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }

            `}
      />


        <CodeBlock
        title="문제 4"
        question={`
        팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다.
            기본 타입 정의:
                
                type TeamMember = {
                id: number;
                name: string;
                email: string;
                role: "developer" | "designer" | "manager";
                isActive: boolean;
                };

        함수 요구사항:
        createTeamMember:

        새 팀원을 생성하는 함수.
        Partial을 활용하여 입력 데이터 중 일부만 제공되더라도 기본값으로 초기화합니다.
        기본값:
        role: "developer".
        isActive: true.
        filterTeamMembers:

        특정 조건에 맞는 팀원만 필터링하는 함수.
        Pick을 사용해 필터링 기준을 정의합니다.
        예: role: "designer" 또는 isActive: false.
        removeSensitiveInfo:

        팀원 목록에서 민감한 정보를 제거하는 함수.
        Omit을 사용해 이메일 주소를 제외한 데이터를 반환합니다.
        
            `}
        code={`
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

// 1. \`createTeamMember\` 함수 작성
function createTeamMember(data: Partial<TeamMember> & Pick<TeamMember, "id">): TeamMember {
  // 여기에 구현
  return {
    id: data.id,
    name: data.name || "",
    email: data.email || "",
    role: data.role || "developer",
    isActive: data.isActive ?? true,
  };
}

// 2. \`filterTeamMembers\` 함수 작성
function filterTeamMembers(
  members: TeamMember[],
  filter:  Pick<TeamMember, "role" | "isActive">
): TeamMember[] {
  // 여기에 구현
    (member) =>
      member.role === filter.role && member.isActive === filter.isActive
}

// 3. \`removeSensitiveInfo\` 함수 작성
function removeSensitiveInfo(
  members: TeamMember[]
): Omit<TeamMember, "email">[] {
  // 여기에 구현
  return members.map(({ email, ...rest }) => rest);
}

// 테스트 코드
const members: TeamMember[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];

// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]

            `}
            
            />


    </div>
  );
};

export default UtilitytypePage;
