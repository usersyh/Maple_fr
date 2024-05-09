import React from 'react';
import { useTable, usePagination } from 'react-table';
import ServerBar from '../components/ServerTagBar';
import Pagination from '../components/Pagination';
import Job from '../components/Job';
import 엔버 from '../assets/엔버.png';

function Mulung() {
  
  var data = React.useMemo(function() {
    var dataArray = [
      { col1: '1', col2: { name: '엔버엔버', Image: 엔버 }, col3: 'Lv296', col4: '엔젤리버스터', col5: '엘리시움', col6: '메이플', col7: '99', col8: '14분59초' },
      { col1: '2', col2: { name: '테스트네임', Image: 엔버 }, col3: 'Lv296', col4: '히어로', col5: '베라', col6: '메이플', col7: '98', col8: '14분59초' },
      { col1: '3', col2: { name: '테스트', Image: 엔버 }, col3: 'Lv296', col4: '소울마스터', col5: '루나', col6: '메이플', col7: '80', col8: '14분59초' },
      { col1: '4', col2: { name: '테스', Image: 엔버 }, col3: 'Lv296', col4: '플레임위자드', col5: '오로라', col6: '메이플', col7: '67', col8: '14분59초' },
      { col1: '5', col2: { name: 'test', Image: 엔버 }, col3: 'Lv296', col4: '제로', col5: '스카니아', col6: '메이플', col7: '65', col8: '14분59초' },
      { col1: '6', col2: { name: 'testname', Image: 엔버 }, col3: 'Lv296', col4: '바이퍼', col5: '노바', col6: '메이플', col7: '64', col8: '14분59초' },
      { col1: '7', col2: { name: 'testname1234', Image: 엔버 }, col3: 'Lv296', col4: '아크메이지(썬,콜)', col5: '엘리시움', col6: '메이플', col7: '55', col8: '14분59초' },
      { col1: '8', col2: { name: 'testna', Image: 엔버 }, col3: 'Lv296', col4: '미하일', col5: '엘리시움', col6: '메이플', col7: '45', col8: '14분59초' },
      { col1: '9', col2: { name: '앙 기모띠', Image: 엔버 }, col3: 'Lv296', col4: '새도어', col5: '엘리시움', col6: '메이플', col7: '35', col8: '14분59초' },
      { col1: '10', col2: { name: '밤양갱', Image: 엔버 }, col3: 'Lv296', col4: '팔라딘', col5: '엘리시움', col6: '메이플', col7: '25', col8: '14분59초' }
    ];
    return dataArray;
  }, []);

  var columns = React.useMemo(function () {
    return [
      {
        Header: '#',
        accessor: 'col1', // accessor는 행의 원본 데이터에 대한 경로입니다
      },
      {
        Header: '캐릭터',
        accessor: 'col2',
        Cell: ({ cell }) => (
          <div>
            <img src={cell.value.Image} alt={cell.value.name} style={{ width: '70px', height: '70px' }} />
            <span>{cell.value.name}</span>
          </div>
        )
      },
      {
        Header: '레벨',
        accessor: 'col3',
      },
      {
        Header: '직업',
        accessor: 'col4',
      },
      {
        Header: '월드',
        accessor: 'col5',
      },
      {
        Header: '길드',
        accessor: 'col6',
      },
      {
        Header: '구간',
        accessor: 'col7',
      },
      {
        Header: '기록',
        accessor: 'col8',
      }
      // 여기에 추가 열을 입력하세요
    ];
  }, []);

  // var tableInstance = useTable({ columns: columns, data: data }, usePagination);

  // var getTableProps = tableInstance.getTableProps;
  // var getTableBodyProps = tableInstance.getTableBodyProps;
  // var headerGroups = tableInstance.headerGroups;
  // var rows = tableInstance.rows;
  // var prepareRow = tableInstance.prepareRow;


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,         //헤더들
    page,                 //현재 페이지 데이터
    prepareRow,           //각 행을 준비하는 함수
    nextPage,             //다음 페이지 이동 함수
    previousPage,         //이전 페이지 이동 함수
    canNextPage,          //다음 페이지 이동 가능 여부
    canPreviousPage,      //이전 페이지 이동 가능 여부
    pageOptions,          //사용 가능한 페이지 옵션
    gotoPage,             //주어진 페이지로 이동 함수
    state: { pageIndex, pageSize } // 페이지 크기 추가
  } = useTable({ columns: columns, data: data, initialState: { pageSize: 20 } }, 
    usePagination);

  // 페이지네이션과 관련된 부분에서 page를 사용하도록 수정
  {
    page.map(function (row) {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(function (cell) {
            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
          })}
        </tr>
      );
    })
  }






  return (
    <div className='total-group'>
      <ServerBar />
      <Job />
      <div className='container-ranking'>
        <table {...getTableProps()} >
          <thead>
            {headerGroups.map(function (headerGroup) {
              return (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(function (column) {
                    return <th {...column.getHeaderProps()}>{column.render('Header')}</th>;
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(function (row) {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(function (cell) {
                    return <td className='ranking-td' {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
      />
      </div>

    </div>
  );
}

export default Mulung;