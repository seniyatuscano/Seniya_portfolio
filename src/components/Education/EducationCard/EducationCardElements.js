import styled from "@emotion/styled";

// Card styling: Enhanced padding, shadow, and width control
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3% 4%;
  margin-bottom: 2rem;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  background-color: #fff;
  overflow: hidden;

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 2% 4%;
  }
`;

// Styling for the courses container
export const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

// Individual course card style
export const CourseCard = styled.div`
  border-radius: 12px;
  background-color: #f0f0f0;
  padding: 7px 14px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  cursor: default;
  box-shadow: 0px 2px 6px rgba(160, 170, 180, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e5e5e5;
    box-shadow: 0px 4px 10px rgba(160, 170, 180, 0.5);
  }
`;

// Details section container (score, date)
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
  background-color: #fafafa;
  border-radius: 10px;
`;

// Degree and college name section container
export const DegreeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 100%;
`;

// Degree title styling
export const DegreeTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 5px;
`;

export const CollegeName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 5px;
  margin-bottom: 10px;
`;