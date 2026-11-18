'use strict';
const inquiryForm = document.querySelector('#biz-form');
const topic = inquiryForm.elements.namedItem('相談項目');
document.querySelectorAll('[data-topic]').forEach(link => {
  link.addEventListener('click', () => { topic.value = link.dataset.topic; });
});
inquiryForm.querySelector('button[type=submit]').hidden = false;
inquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(inquiryForm);
  const body = Array.from(fields, ([label, value]) => label + '：' + (value.trim() || '未定・未入力')).join('\r\n\r\n');
  const draft = document.querySelector('#biz-draft');
  draft.querySelector('textarea').value = body;
  draft.hidden = false;
  const subject = '【事業のご相談】' + topic.value;
  window.location.href = 'mailto:iwami_arts@yahoo.co.jp?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});
