import React from 'react';
import { Table } from 'tdesign-react';

const data = new Array(6).fill(null).map((_, i) => ({
  i,
  platform: ['公有', '私有'][i % 1],
  type: ['Array<any>', 'String', 'Object', 'Boolean', 'Number'][i % 4],
  default: ['[]', '""', '{}', 'false', '-1', '0'][i % 5],
  needed: ['Y', 'N'][i % 1],
  description: ['数据源', '描述', '复杂类型', '标识符', '位置'][i % 4],
  comment: '表头合并',
}));

const columns = [
  {
    align: 'left',
    className: 'test',
    colKey: 'platform',
    title: '平台',
  },
  {
    align: 'left',
    className: 'row',
    colKey: 'type',
    title: '类型',
  },
  {
    align: 'left',
    className: 'test4',
    colKey: 'default',
    title: '默认值',
  },
  {
    align: 'left',
    className: 'test3',
    colKey: 'needed',
    title: '是否必传',
  },
  {
    align: 'left',
    className: 'row',
    ellipsis: true,
    colKey: 'description',
    // 多行表头合并请参考「多级表头示例」
    title: '合并单行表头的最后两列',
    // 仅适用于单行表头合并列
    colspan: 2,
    // 设置列样式，注释的示例代码有效
    // attrs: ({ type, col, row, colIndex, rowIndex }) => ({
    //   style: {
    //     color: 'blue',
    //   },
    // }),
  },
  {
    colKey: 'comment',
    title: '合并列',
  },
];

export default function TableExample() {
  function rowspanAndColspan({ col, rowIndex }) {
    if (col.colKey === 'needed' && rowIndex === 0) {
      return {
        colspan: 2,
      };
    }
    if (col.colKey === 'type' && rowIndex === 1) {
      return {
        colspan: 2,
        rowspan: 2,
      };
    }
    if (col.colKey === 'default' && rowIndex === 4) {
      return {
        colspan: 2,
        rowspan: 2,
      };
    }
  }

  return (
    <Table
      data={data}
      bordered={true}
      columns={columns}
      rowKey="i"
      rowspanAndColspan={rowspanAndColspan}
    />
  );
}
