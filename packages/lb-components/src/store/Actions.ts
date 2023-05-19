export const ANNOTATION_ACTIONS = {
  INIT_ALL_STATE: '@@INIT_ALL_STATE',
  UPDATE_TOOL_INSTANCE: '@@UPDATE_TOOL_INSTANCE',
  UPDATE_IMG_LIST: '@@UPDATE_IMG_LIST',
  UPDATE_ANNOTATION_CONFIG: '@@UPDATE_ANNOTATION_CONFIG',
  LOAD_FILE_DATA: '@@LOAD_FILE_DATA',
  SUBMIT_FILE_DATA: '@@SUBMIT_FILE_DATA',
  SET_TASK_CONFIG: '@@SET_TASK_CONFIG',
  INIT_TOOL: '@@INIT_TOOL',
  SET_TOOL: '@@SET_TOOL',
  UPDATE_ON_SUBMIT: '@@UPDATE_ON_SUBMIT',
  UPDATE_ON_SAVE: '@@UPDATE_ON_SAVE',
  UPDATE_ON_PAGE_CHANGE: '@@UPDATE_ON_PAGE_CHANGE',
  UPDATE_ON_STEP_CHANGE: '@@UPDATE_ON_STEP_CHANGE',
  UPDATE_ROTATE: '@@UPDATE_ROTATE',
  UPDATE_GET_FILE_DATA: '@@UPDATE_GET_FILE_DATA',
  UPDATE_PAGE_SIZE: '@@UPDATE_PAGE_SIZE',
  UPDATE_LOAD_FILE_LIST: '@@UPDATE_LOAD_FILE_LIST',
  GET_FILE_DATA: '@@GET_FILE_DATA',
  SET_FILE_DATA: '@@SET_FILE_DATA',
  COPY_BACKWARD_RESULT: '@@COPY_BACKWARD_RESULT',
  SET_STEP: '@@SET_STEP',
  SUBMIT_RESULT: '@@SUBMIT_RESULT',
  SAVE_RESULT: '@@SAVE_RESULT',
  SET_BASIC_INDEX: '@@SET_BASIC_INDEX',
  CALC_STEP_PROGRESS: '@@CALC_STEP_PROGRESS',
  SET_TRIGGER_EVENT_AFTER_INDEX_CHANGED: '@@SET_TRIGGER_EVENT_AFTER_INDEX_CHANGED',
  SKIP_BEFORE_PAGE_TURNING: '@@SKIP_BEFORE_PAGE_TURNING',
  UPDATE_BEFORE_ROTATE: '@@UPDATE_BEFORE_ROTATE',
  SET_LOADING: '@@SET_LOADING',
  SET_POINT_CLOUD_LOADING: '@@SET_POINT_CLOUD_LOADING',
  SET_CHECK_MODE: '@@SET_CHECK_MODE',

  SET_TASK_STEP_LIST: '@@SET_TASK_STEP_LIST',

  UPDATE_ANNOTATION_VALID: '@@UPDATE_ANNOTATION_VALID',

  BATCH_UPDATE_TRACK_ID: '@@BATCH_UPDATE_TRACK_ID',

  BATCH_UPDATE_RESULT_BY_TRACK_ID: '@@BATCH_UPDATE_RESULT_BY_TRACK_ID',

  BATCH_UPDATE_IMG_LIST_RESULT_BY_PREDICT_RESULT: '@@BATCH_UPDATE_IMG_LIST_RESULT_BY_PREDICT_RESULT',

  SET_PREDICT_RESULT_VISIBLE: '@@SET_PREDICT_RESULT_VISIBLE',
  SET_PREDICT_RESULT: '@@SET_PREDICT_RESULT',
  SET_HIGHLIGHT_ATTRIBUTE: '@@SET_HIGHLIGHT_ATTRIBUTE',
};

export const IMAGE_ATTRIBUTE_ACTIONS = {
  UPDATE_IMG_ATTRIBUTE: '@@UPDATE_IMG_ATTRIBUTE',
  INIT_IMG_ATTRIBUTE: '@@INIT_IMG_ATTRIBUTE',
};

export const TOOL_STYLE_ACTIONS = {
  INIT_TOOL_STYLE_CONFIG: '@@INIT_TOOL_STYLE_CONFIG',
  UPDATE_TOOL_STYLE_CONFIG: '@@UPDATE_TOOL_STYLE_CONFIG',
};
