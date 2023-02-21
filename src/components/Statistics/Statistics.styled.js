import styled from 'styled-components';

export const StatisticsList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
  border-radius: 10px;
  width: 500px;
  margin: 20px auto 20px auto;
  padding: 10px;
 
`;

export const UploadStats = styled.ul`
  gap: 10px;
  display: flex;
  

  
 
`;

export const UploadItem = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }}
`;