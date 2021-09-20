(function(){
    var locale = {
        'rtl' : false,
        'decimals-separator' : '.',
        'thousands-separator' : ',',
        'menu-reload' : '새로고침',
        'menu-print' : '차트 인쇄',
        'menu-viewaspng' : 'PNG로 보기',
        'menu-viewasjpg' : 'JPG로 보기',
        'menu-downloadpdf' : 'PDF로 내려받기',
        'menu-downloadsvg' : 'SVG로 내려받기',
          'menu-exportdata' : '데이터 내보내기',	
          'menu-downloadcsv' : 'CSV로 내려받기',
          'menu-downloadxls' : 'XLS로 내려받기',
          'menu-viewdatatable' : '데이터 테이블 보기',
        'menu-zoomin' : '확대',
        'menu-zoomout' : '축소',
        'menu-viewall' : '모두 보기',
        'menu-viewsource' : '소스 보기',
        'menu-bugreport' : '버그 신고',
        'menu-switchto2d' : '2D로 전환',
        'menu-switchto3d' : '3D로 전환',
        'menu-showguide' : '가이드 보기',
        'menu-hideguide' : '가이드 숨기기',
        'menu-switchtolin' : '선형 스케일 보기',
        'menu-switchtolog' : '로그 스케일 보기',
        'menu-fullscreen' : '전체 화면',
        'menu-exitfullscreen' : '전체 화면 나가기',
        'menu-goback' : '뒤로',
        'menu-goforward' : '앞으로',
        'date-formats' : {
            'msecond' : '%Y년 %M월 %d일<br>%g:%i:%s %A<br>%q ms',
            'second' : '%Y년 %M월 %d일<br>%g:%i:%s %A',
            'minute' : '%Y년 %M월 %d일<br>%g:%i %A',
            'hour' : '%Y년 %M월 %d일<br>%g %A',
            'day' : '%Y년 %M월 %d일',
            'month' : '%Y년 %M월',
            'year' : '%Y년'
        },
        'days-short' : ['일', '월', '화', '수', '목', '금', '토'],
        'days-long' : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        'months-short' : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '12월', '12월'],
        'months-long' : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '12월', '12월'],
        'sync-wait' : '잠시만 기다려주세요...',
        'export-wait' : '내보내는 중...',
        'progress-wait-long' : '잠시만 기다려주세요. 불러오는중...',
        'progress-wait-short' : '잠시만 기다려주세요...',
        'progress-wait-mini' : '...',
        'error-header' : '오류가 발생했어요',
        'error-message' : '오류 메시지:',
        'error-close' : '닫기',
        'bugreport-header' : '버그 신고하기',
        'bugreport-senddata' : 'JSON 데이터 보내기',
        'bugreport-sendcapture' : '그래프 캡쳐 보내기',
        'bugreport-yourcomment' : '코멘트:',
        'bugreport-jsondata' : 'JSON 데이터:',
        'bugreport-youremail' : '이메일 주소',
        'bugreport-infoemail' : '문제에 대한 답변을 이메일로 받고 싶다면',
        'bugreport-emailmandatory' : '이메일 주소는 필수 항목입니다...',
        'bugreport-submit' : '보내기',
        'bugreport-cancel' : '취소',
        'bugreport-confirm' : '버그 리포트가 전송되었어요.\n\n감사합니다!',
        'about-close' : '닫기',
        'viewsource-jsonsource' : '분석된 JSON',
        'viewsource-originalsource' : '원본 JSON',
        'viewsource-close' : '닫기',
        'viewsource-apply' : '적용',
        'viewimage-close' : '닫기',
        'legend-pagination' : '%pages% 페이지 중 %page% 페이지'
    };
    
    if (typeof zingchart !== 'undefined') {
      zingchart.i18n.ko_kr = locale;
    }
    else if (typeof window === 'undefined' && module.exports !== 'undefined'){
      module.exports = locale;
    }
  })();
  