<?php

namespace BaseValueObject\Scalar\Email;

use BaseValueObject\Scalar\BaseString;

/**
 * Class Email
 * @package BaseValueObject\Scalar\Email
 */
class Email extends BaseString
{
    /**
     * @inheritdoc
     */
    protected function setValue(string $value): void
    {
        if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            throw new \InvalidArgumentException(
                sprintf('The email %s is invalid.', $value)
            );
        }

        $this->value = $value;
    }
}
