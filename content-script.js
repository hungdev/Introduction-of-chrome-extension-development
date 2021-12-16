function applySnow() {

  const div = document.createElement('div');

  div.id = 'snowflakeContainer';

  div.innerHTML = `
  <div class="snowflakes" aria-hidden="true">
  <div class="snowflake" style="font-size: 40px;">
    ❅
  </div>
  <div class="snowflake" style="font-size: 30px;">
    ❆
  </div>
  <div class="snowflake" style="font-size: 20px;">
    ✽
  </div>
  <div class="snowflake" style="font-size: 12px;">
    ❀
  </div>
  <div class="snowflake" style="font-size: 38px;">
    ❅
  </div>
  <div class="snowflake" style="font-size: 20px;">
    ❉
  </div>
  <div class="snowflake" style="font-size: 24px;">
    ❆
  </div>
  <div class="snowflake" style="font-size: 21px;">
    ❁
  </div>
  <div class="snowflake" style="font-size: 18px;">
    ❆
  </div>
  <div class="snowflake" style="font-size: 32px;">
    ❅
  </div>
  <div class="snowflake" style="font-size: 26px;">
    ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆
  </div>
</div>
  `;

  document.body.appendChild(div);
}

applySnow();