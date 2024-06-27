import styled from "styled-components";
export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;


export const BackButton = styled.button`
  margin-right: 20px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #333;
`;

export const Checkbox = styled.input`
  margin-top: 5px;
`;


export const PaperList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PaperItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const PaperInfo = styled.div`
  flex: 1;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
