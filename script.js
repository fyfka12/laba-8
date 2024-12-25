    class MyClass {
        constructor(param1, param2, param3, param4) {
          this.param1 = param1;
          this.param2 = param2;
          this.param3 = param3;
          this.param4 = param4;
        }
  
        displayInfo() {
          document.write(`<p>Параметри: ${this.param1}, ${this.param2}, ${this.param3}, ${this.param4}</p>`);
        }
      }
  
      const obj1 = new MyClass('A', 'B', 'C', 'D');
      const obj2 = new MyClass(1, 2, 3, 4);
      const obj3 = new MyClass(true, false, null, undefined);
  
      obj1.displayInfo();
      obj2.displayInfo();
      obj3.displayInfo();
  
      function AltClass(param1, param2, param3, param4) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.param4 = param4;
      }
  
      AltClass.prototype.displayInfo = function() {
        document.write(`<p>Параметри: ${this.param1}, ${this.param2}, ${this.param3}, ${this.param4}</p>`);
      };
  
      const altObj1 = new AltClass('X', 'Y', 'Z', 'W');
      altObj1.displayInfo();
  
      class Component {
        constructor(selector) {
          this.$el = document.querySelector(selector);
        }
  
        blockHide() {
          this.$el.style.display = 'none';
        }
  
        editColor(color) {
          this.$el.style.backgroundColor = color;
        }
      }
  
      class Box extends Component {
        constructor(selector, width, height, color) {
          super(selector);
          this.width = width;
          this.height = height;
          this.color = color;
  
          this.applyStyles();
        }
  
        applyStyles() {
          this.$el.style.width = `${this.width}px`;
          this.$el.style.height = `${this.height}px`;
          this.$el.style.backgroundColor = this.color;
        }
      }
  
      const box1 = new Box('#box1', 100, 100, 'lightblue');
  
      console.log('Наслідує методи:', box1 instanceof Component); // true
      box1.editColor('coral');
      setTimeout(() => box1.blockHide(), 2000);
  
      Component.prototype.showBlock = function() {
        this.$el.style.display = 'block';
      };
  
      setTimeout(() => box1.showBlock(), 4000);