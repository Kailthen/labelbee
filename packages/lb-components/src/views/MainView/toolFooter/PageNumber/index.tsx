import React, { useContext, useEffect, useState } from 'react';
import { AppState } from '@/store';
import { connect } from 'react-redux';
import { GraphToolInstance } from '@/store/annotation/types';
import { Divider } from 'antd/es';
import { useTranslation } from 'react-i18next';
import { LabelBeeContext } from '@/store/ctx';
import { PointCloudContext } from '@/components/pointCloudView/PointCloudContext';
import { EPointCloudPattern } from '@labelbee/lb-utils';

interface IProps {
  toolInstance: GraphToolInstance;
}

const PageNumber = (props: IProps) => {
  const { toolInstance } = props;
  const [_, forceRender] = useState(0);
  const { pointCloudBoxList, segmentation, globalPattern } = useContext(PointCloudContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (toolInstance) {
      toolInstance.singleOn('updatePageNumber', () => {
        forceRender((s) => s + 1);
      });
    }
  }, [toolInstance]);

  if (!toolInstance) {
    return null;
  }

  /**
   * Count Showing Priority.
   * 
   * 1. currentPageCount
   * 2. currentPageResult?.length.
   * 3. PointCloud data.
   */
  const count =
    toolInstance?.currentPageCount ??
    toolInstance?.currentPageResult?.length ??
    (globalPattern === EPointCloudPattern.Detection
      ? pointCloudBoxList.length
      : segmentation.length);

  if (count >= 0) {
    return (
      <span>
        {`${t('ItemsOfThisPage')}: ${count}`}
        <Divider type='vertical' style={{ background: 'rgba(153, 153, 153, 1)', height: '16px' }} />
      </span>
    );
  }

  return null;
};

const mapStateToProps = (state: AppState) => {
  return {
    toolInstance: state.annotation?.toolInstance,
  };
};

export default connect(mapStateToProps, null, null, { context: LabelBeeContext })(PageNumber);
