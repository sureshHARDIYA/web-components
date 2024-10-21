import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "trygno-input",
  styleUrl: "trygno-input.scss",
  shadow: true,
})
export class Input {
  @Event() inputEvent: EventEmitter;

  @Event() changeEvent: EventEmitter;

  @Event() blurEvent: EventEmitter;

  @Event() focusEvent: EventEmitter;

  @Prop() label: string;

  @Prop() name: string;

  @Prop() helpText: string = null;

  @Prop() inputId: string = null;

  @Prop() disabled: boolean = false;

  @Prop() error: string = null;

  @Prop() type: string = "text";

  @Prop({ reflect: true, mutable: true }) value: string | number = "";

  @Prop() maxLength: number;

  @Prop() minLength: number;

  @Prop() pattern: string;

  @Prop() required: boolean = false;

  @Prop() placeholder: string = "";

  render() {
    const hasError = Boolean(this.error);
    const ariaDescribedBy = `${this.inputId} error-${this.inputId} help-${this.inputId}`;

    return (
      <Host>
        <div
          class={`input-wrapper ${
            this.disabled ? "input-wrapper__disabled" : ""
          } ${hasError ? "input-wrapper__error" : ""}`}
        >
          <label htmlFor={this.inputId}>{this.label}</label>
          {this.helpText && (
            <span id={`help-${this.inputId}`} class="help-text">
              {this.helpText}
            </span>
          )}
          {hasError && (
            <trygno-alert
              variant="danger"
              class="error"
              id={`error-${this.inputId}`}
            >
              <trygno-icon
                color="inherit"
                name="alert-triangle"
                slot="icon-right"
              />
              {this.error}
            </trygno-alert>
          )}
          <input
            class={`trygno-input ${hasError ? "trygno-input__invalid" : ""}`}
            type={this.type}
            id={this.inputId}
            disabled={this.disabled}
            aria-invalid={hasError}
            aria-describedby={ariaDescribedBy}
            required={this.required}
            maxLength={this.maxLength}
            minLength={this.minLength}
            pattern={this.pattern}
            value={this.value}
            placeholder={this.placeholder}
            name={this.name}
            onBlur={(e) => this.blurEvent.emit(e)}
            onFocus={(e) => this.focusEvent.emit(e)}
            onInput={(e) => this.inputEvent.emit(e)}
            onChange={(e) => this.changeEvent.emit(e)}
          >
            <slot />
          </input>
        </div>
      </Host>
    );
  }
}
