<?php

namespace BaseValueObject\Scalar\Ip;

use BaseValueObject\Scalar\BaseString;

/**
 * Class IpV6
 * @package BaseValueObject\Scalar\Ip
 */
class IpV6 extends BaseString
{
    /**
     * @inheritdoc
     */
    protected function setValue(string $value): void
    {
        if (!filter_var($value, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
            throw new \InvalidArgumentException(
                'The IPv6 %s is invalid.',
                $value
            );
        }

        $this->value = $value;
    }
}
