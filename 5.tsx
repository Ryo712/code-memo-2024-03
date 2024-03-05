//未読・進行中・読了アイコン
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,          // 未読を表すアイコン
  faBookOpen,      // 読書中を表すアイコン
  faCheckDouble,   // 読了を表すアイコン
  faSearch,        // 検索アイコンも再度インポートします
} from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Unread', icon: faBook },       // 未読アイコン
  { name: 'Reading', icon: faBookOpen },  // 読書中アイコン
  { name: 'Read', icon: faCheckDouble },  // 読了アイコン
];