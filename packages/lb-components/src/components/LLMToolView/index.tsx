/*
 * @file LLM tool view
 * @Author: lixinghua lixinghua@sensetime.com
 * @Date: 2023-04-10
 */

import React, { useContext, useEffect, useState } from 'react';
import { AppState } from '@/store';
import { connect } from 'react-redux';
import { LabelBeeContext } from '@/store/ctx';
import { message } from 'antd';
import { prefix } from '@/constant';
import { LLMContext } from '@/views/MainView';
import { Layout } from 'antd/es';
import LLMSidebar from '@/components/LLMToolView/sidebar';
import { getStepConfig } from '@/store/annotation/reducer';
import QuestionView from './questionView';
import { useTranslation } from 'react-i18next';
import { IAnswerList } from './types';

interface IProps {
  checkMode?: boolean;
  annotation?: any;
  setHoverKey: (value: number) => void;
}
const { Sider } = Layout;
const LLMViewCls = `${prefix}-LLMView`;
const layoutCls = `${prefix}-layout`;
const LLMToolView: React.FC<IProps> = (props) => {
  const { annotation, setHoverKey, checkMode } = props;
  const { imgIndex, imgList, stepList, step } = annotation;
  const { hoverKey } = useContext(LLMContext);
  const [answerList, setAnswerList] = useState<IAnswerList[]>([]);
  const [question, setQuestion] = useState<string>('');
  const LLMStepConfig = getStepConfig(stepList, step)?.config;
  const { t } = useTranslation();
  useEffect(() => {
    let interval: undefined | ReturnType<typeof setInterval>;

    if (!checkMode) {
      interval = setInterval(() => {
        message.info(t('EfficientListening'));
      }, 1000 * 60);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (!imgList[imgIndex]) {
      return;
    }

    const qaData = imgList[imgIndex]?.questionList;

    setQuestion(qaData?.question);
    setAnswerList(qaData?.answerList || []);
  }, [imgIndex]);

  return (
    <Layout className={LLMViewCls}>
      <QuestionView hoverKey={hoverKey} question={question} answerList={answerList} />
      {LLMStepConfig && LLMStepConfig !== '{}' && (
        <Sider className={`${layoutCls}__side`} width={600}>
          <LLMSidebar setHoverKey={setHoverKey} checkMode={checkMode} />
        </Sider>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    annotation: state.annotation,
  };
};

export default connect(mapStateToProps, null, null, { context: LabelBeeContext })(LLMToolView);
